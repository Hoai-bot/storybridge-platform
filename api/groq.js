// api/groq.js - Vercel Serverless Function
export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Phương thức không hợp lệ' });
  }

  const apiKey = (process.env.GROQ_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(500).json({ error: 'Chưa cấu hình GROQ_API_KEY trên Vercel.' });
  }

  const { type, topic, level, journalText } = req.body || {};

  try {
    let systemPrompt = "";
    let userPrompt = "";

    if (type === 'generate_story') {
      let wordCountGuide = "4 đến 5 từ tiếng Anh cơ bản (~20% EN)";
      if (level === 'intermediate') {
        wordCountGuide = "8 đến 10 từ/cụm từ tiếng Anh (~50% EN)";
      } else if (level === 'advanced') {
        wordCountGuide = "14 đến 16 từ/cụm từ tiếng Anh (~80% EN)";
      }

      systemPrompt = `Bạn là chuyên gia giảng dạy phương pháp Translanguaging (Đan ngữ Việt - Anh).
Nhiệm vụ: Tạo một đoạn văn ngắn pha trộn giữa Tiếng Việt và các từ khóa Tiếng Anh then chốt theo đúng cấp độ yêu cầu.
TUYỆT ĐỐI KHÔNG VIẾT 100% TIẾNG VIỆT HOẶC 100% TIẾNG ANH.
BẮT BUỘC: Mỗi từ/cụm từ Tiếng Anh trong bài đọc phải bọc theo đúng định dạng HTML:
<span class='l2-word' onclick='openWordModal("EnglishWord", "/Phonetic/", "Nghĩa tiếng Việt")'>EnglishWord</span>

Ví dụ mẫu chuẩn:
Hôm nay là chuyến bay đầu tiên của tôi tại <span class='l2-word' onclick='openWordModal("airport", "/ˈeə.pɔːt/", "sân bay")'>airport</span>. Tôi cảm thấy rất <span class='l2-word' onclick='openWordModal("excited", "/ɪkˈsaɪ.tɪd/", "háo hức")'>excited</span> khi bước lên máy bay. Sau khi <span class='l2-word' onclick='openWordModal("take off", "/ˈteɪk.ɒf/", "cất cánh")'>take off</span>, tôi nhìn qua <span class='l2-word' onclick='openWordModal("window", "/ˈwɪn.dəʊ/", "cửa sổ")'>window</span> và thấy bầu trời trong xanh.

Cấu trúc JSON phản hồi bắt buộc (không bọc trong \`\`\`json):
{
  "title": "Tiêu đề bài học",
  "category": "Cấp độ",
  "content": "Nội dung đoạn văn có chứa các thẻ span",
  "fullTranslation": "Toàn bộ bài đọc được dịch sang Tiếng Việt"
}`;

      userPrompt = `Tạo bài đọc Translanguaging:
- Chủ đề: "${topic || 'Đời sống sinh viên'}"
- Cấp độ yêu cầu: "${level || 'beginner'}"
- Ràng buộc mật độ từ vựng: BẮT BUỘC chèn đúng ${wordCountGuide}.
- Độ dài đoạn văn: khoảng 60-90 từ.
- Định dạng: Chỉ trả về chuỗi JSON thuần túy, không có thẻ markdown.`;

    } else if (type === 'analyze_journal') {
      systemPrompt = "Bạn là chuyên gia thẩm định Translanguaging (Code-switching Việt - Anh). Phản hồi bắt buộc ở định dạng JSON thuần túy, tuyệt đối không dùng thẻ markdown ```json.";
      userPrompt = `Hãy phân tích đoạn nhật ký đan ngữ Việt - Anh sau:
"${journalText}"

Nhiệm vụ:
1. Đánh giá tỷ lệ pha trộn tiếng Anh có tự nhiên không.
2. Nhận xét các từ dùng đúng.
3. Khen ngợi và gợi ý cải thiện ngắn gọn.

Cấu trúc JSON bắt buộc:
{
  "estimatedRatio": "Ước tính % L2 (ví dụ: 25%)",
  "assessment": "Mức độ phù hợp (Beginner/Intermediate/Advanced)",
  "compliment": "Lời khen cụ thể",
  "suggestions": "Gợi ý cải thiện ngắn gọn"
}`;
    } else {
      return res.status(400).json({ error: 'Loại tác vụ không hợp lệ' });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.5,
        max_tokens: 900
      })
    });

    const rawText = await response.text();
    let data;

    try {
      data = JSON.parse(rawText);
    } catch {
      return res.status(response.status || 500).json({
        error: `Phản hồi không phải JSON: ${rawText.slice(0, 120)}`
      });
    }

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || `Lỗi từ Groq (${response.status})`
      });
    }

    const contentText = data.choices?.[0]?.message?.content || "{}";
    const parsedData = JSON.parse(contentText);
    return res.status(200).json(parsedData);

  } catch (err) {
    return res.status(500).json({ error: 'Lỗi máy chủ nội bộ: ' + err.message });
  }
}