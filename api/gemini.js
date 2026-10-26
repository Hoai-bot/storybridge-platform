// api/gemini.js - Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Phương thức không hợp lệ' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chưa cấu hình GEMINI_API_KEY trên Vercel.' });
  }

  const { type, topic, level, journalText } = req.body;

  try {
    let prompt = "";

    if (type === 'generate_story') {
      const ratioGuidance = {
        beginner: "15-20% từ tiếng Anh (L2). Giữ nguyên cấu trúc ngữ pháp Tiếng Việt, chỉ thay thế các danh từ đơn giản, địa điểm, đồ vật phổ biến.",
        intermediate: "40-50% từ tiếng Anh (L2). Pha trộn cụm động từ, tính từ và các vế câu ngắn song ngữ tự nhiên.",
        advanced: "75-80% từ tiếng Anh (L2). Văn phong học thuật, câu đa phần là tiếng Anh, tiếng Việt đóng vai trò cầu nối ngữ nghĩa."
      };

      prompt = `
Bạn là chuyên gia sư phạm ngôn ngữ phương pháp Translanguaging (Đan ngữ Việt - Anh).
Tạo 1 bài đọc ngắn khoảng 60-90 từ với chủ đề: "${topic || 'Đời sống sinh viên'}".
Mức độ yêu cầu: ${level} (${ratioGuidance[level] || ratioGuidance.beginner}).

BẮT BUỘC: Các từ/cụm từ Tiếng Anh phải bọc trong thẻ HTML:
<span class='l2-word' onclick='openWordModal("Từ/Cụm từ", "/Phiên âm IPA/", "Nghĩa tiếng Việt")'>Từ/Cụm từ</span>

Chỉ trả về DUY NHẤT một chuỗi JSON thuần:
{
  "title": "Tiêu đề tiếng Việt",
  "category": "Chủ đề",
  "content": "Nội dung đoạn văn chứa thẻ span...",
  "fullTranslation": "Bản dịch tiếng Việt"
}
`;
    } else if (type === 'analyze_journal') {
      prompt = `
Bạn là chuyên gia thẩm định sư phạm Translanguaging (Code-switching Việt - Anh).
Hãy phân tích đoạn nhật ký sau:
"${journalText}"

Nhiệm vụ:
1. Đánh giá tỷ lệ pha trộn tiếng Anh có tự nhiên không.
2. Chỉ ra các từ tiếng Anh dùng đúng.
3. Khen ngợi và gợi ý 1-2 từ thay thế hoặc cách diễn đạt tốt hơn.

Chỉ trả về DUY NHẤT một chuỗi JSON thuần:
{
  "estimatedRatio": "Ước tính % L2 (ví dụ: 30%)",
  "assessment": "Mức độ phù hợp (Beginner/Intermediate/Advanced)",
  "compliment": "Lời khen cụ thể",
  "suggestions": "Gợi ý cải thiện"
}
`;
    } else {
      return res.status(400).json({ error: 'Loại tác vụ không hợp lệ' });
    }

    // Endpoint chính thức dùng model gemini-3.8-flash theo yêu cầu của Google API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json"
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Lỗi từ Gemini API' });
    }

    let rawResult = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    rawResult = rawResult.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();

    const parsedData = JSON.parse(rawResult);
    return res.status(200).json(parsedData);

  } catch (err) {
    return res.status(500).json({ error: 'Lỗi xử lý: ' + err.message });
  }
}