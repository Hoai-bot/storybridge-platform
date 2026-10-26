// api/groq.js - Vercel Serverless Function
export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Phương thức không hợp lệ' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chưa cấu hình GROQ_API_KEY trên Vercel. Hãy kiểm tra tab Environment Variables!' });
  }

  const { type, topic, level, journalText } = req.body || {};

  try {
    let systemPrompt = "";
    let userPrompt = "";

    if (type === 'generate_story') {
      systemPrompt = "Bạn là chuyên gia sư phạm Translanguaging (Đan ngữ Việt - Anh). Phản hồi bắt buộc ở định dạng JSON thuần túy, không dùng thẻ markdown.";
      userPrompt = `Tạo bài đọc Translanguaging Việt-Anh khoảng 60-80 từ với chủ đề: "${topic || 'Đời sống sinh viên'}", mức độ: ${level || 'beginner'}.
Các từ/cụm từ tiếng Anh bắt buộc bọc theo định dạng HTML sau:
<span class='l2-word' onclick='openWordModal("Từ", "/IPA/", "Nghĩa tiếng Việt")'>Từ</span>

Cấu trúc JSON bắt buộc:
{
  "title": "Tiêu đề tiếng Việt",
  "category": "Chủ đề",
  "content": "Nội dung đoạn văn có chứa các thẻ span",
  "fullTranslation": "Bản dịch toàn bộ đoạn văn sang tiếng Việt"
}`;
    } else if (type === 'analyze_journal') {
      systemPrompt = "Bạn là chuyên gia thẩm định Translanguaging (Code-switching Việt - Anh). Phản hồi bắt buộc ở định dạng JSON thuần túy, không dùng thẻ markdown.";
      userPrompt = `Hãy phân tích đoạn nhật ký đan ngữ Việt - Anh sau:
"${journalText}"

Cấu trúc JSON bắt buộc:
{
  "estimatedRatio": "Ước tính % L2 (ví dụ: 25%)",
  "assessment": "Mức độ phù hợp",
  "compliment": "Lời khen cụ thể",
  "suggestions": "Gợi ý cải thiện ngắn gọn"
}`;
    } else {
      return res.status(400).json({ error: 'Loại tác vụ không hợp lệ' });
    }

    // Danh sách model ưu tiên thử nghiệm
    const candidateModels = [
      "llama-3.3-70b-versatile",
      "llama-3.1-8b-instant"
    ];

    let lastError = null;

    for (const modelName of candidateModels) {
      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey.trim()}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: modelName,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt }
            ],
            response_format: { type: "json_object" },
            temperature: 0.5,
            max_completion_tokens: 600
          })
        });

        const rawText = await response.text();
        let data;
        try {
          data = JSON.parse(rawText);
        } catch {
          lastError = rawText.slice(0, 100);
          continue;
        }

        if (!response.ok) {
          lastError = data.error?.message || `Lỗi Groq (${response.status})`;
          // Nếu model không có quyền truy cập, tiếp tục thử model khác
          continue;
        }

        const contentText = data.choices?.[0]?.message?.content || "{}";
        const parsedData = JSON.parse(contentText);
        return res.status(200).json(parsedData);
      } catch (err) {
        lastError = err.message;
      }
    }

    return res.status(500).json({ 
      error: `Groq từ chối truy cập: ${lastError}. Hãy kiểm tra lại GROQ_API_KEY trên Vercel!` 
    });

  } catch (err) {
    return res.status(500).json({ error: 'Lỗi máy chủ nội bộ: ' + err.message });
  }
}