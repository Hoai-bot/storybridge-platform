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
      prompt = `Tạo bài đọc Translanguaging Việt-Anh khoảng 60 từ chủ đề: "${topic || 'Đời sống sinh viên'}", mức độ: ${level || 'beginner'}.
Các từ tiếng Anh bắt buộc bọc dạng: <span class='l2-word' onclick='openWordModal("Word", "/IPA/", "Nghĩa")'>Word</span>.
Chỉ trả về JSON thuần:
{"title":"Tiêu đề","category":"Chủ đề","content":"Nội dung có thẻ span","fullTranslation":"Bản dịch"}`;
    } else if (type === 'analyze_journal') {
      prompt = `Phân tích đoạn nhật ký đan ngữ Việt-Anh sau: "${journalText}".
Chỉ trả về DUY NHẤT chuỗi JSON (ngắn gọn, không markdown):
{"estimatedRatio":"30%","assessment":"Intermediate","compliment":"Dùng từ đúng ngữ cảnh","suggestions":"Gợi ý cải thiện"}`;
    } else {
      return res.status(400).json({ error: 'Loại tác vụ không hợp lệ' });
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.5,
          maxOutputTokens: 400,
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