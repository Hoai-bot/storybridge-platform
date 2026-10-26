// api/gemini.js - Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Phương thức không hợp lệ' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chưa cấu hình GEMINI_API_KEY trên Vercel Environment Variables.' });
  }

  const { type, topic, level, journalText } = req.body;

  try {
    let prompt = "";

    // 1. TẠO BÀI HỌC TRANSLANGUAGING THEO CHỦ ĐỀ
    if (type === 'generate_story') {
      const ratioGuidance = {
        beginner: "15-20% từ tiếng Anh (L2). Giữ nguyên cấu trúc ngữ pháp Tiếng Việt, chỉ thay thế các danh từ đơn giản, địa điểm, đồ vật phổ biến.",
        intermediate: "40-50% từ tiếng Anh (L2). Pha trộn cụm động từ, tính từ và các vế câu ngắn song ngữ tự nhiên.",
        advanced: "75-80% từ tiếng Anh (L2). Văn phong học thuật, câu đa phần là tiếng Anh, tiếng Việt đóng vai trò cầu nối ngữ nghĩa."
      };

      prompt = `
Bạn là chuyên gia sư phạm ngôn ngữ theo phương pháp Translanguaging (Đan ngữ Việt - Anh).
Hãy tạo 1 bài đọc ngắn khoảng 60-90 từ với chủ đề: "${topic || 'Đời sống sinh viên'}".
Mức độ yêu cầu: ${level} (${ratioGuidance[level] || ratioGuidance.beginner}).

QUY TẮC BẮT BUỘC VỀ ĐỊNH DẠNG ĐẦU RA:
- Các từ/cụm từ Tiếng Anh được chèn vào văn bản BẮT BUỘC phải bọc trong thẻ HTML sau:
  <span class='l2-word' onclick='openWordModal("Từ/Cụm từ", "/Phiên âm IPA/", "Nghĩa tiếng Việt")'>Từ/Cụm từ</span>
- Trả về DUY NHẤT một chuỗi JSON hợp lệ (không kèm Markdown codeblock \`\`\`json):
{
  "title": "Tiêu đề bài viết bằng tiếng Việt",
  "category": "Chủ đề bài viết",
  "content": "Nội dung đoạn văn đã nhúng các thẻ span l2-word...",
  "fullTranslation": "Bản dịch tiếng Việt chuẩn toàn bộ đoạn văn"
}
`;
    } 
    // 2. CHẤM BÀI VÀ PHÂN TÍCH NHẬT KÝ ĐAN NGỮ
    else if (type === 'analyze_journal') {
      prompt = `
Bạn là chuyên gia thẩm định sư phạm phương pháp Translanguaging (Code-switching Việt - Anh).
Hãy phân tích đoạn nhật ký sau của học viên:
"${journalText}"

Nhiệm vụ của bạn:
1. Đánh giá tỷ lệ pha trộn tiếng Anh có phù hợp và tự nhiên không.
2. Chỉ ra các từ tiếng Anh học viên đã dùng đúng ngữ cảnh.
3. Khen ngợi điểm tốt và gợi ý 1-2 cách diễn đạt hoặc từ vựng nâng cao hơn để học viên cải thiện.

Trả về DUY NHẤT một chuỗi JSON hợp lệ (không kèm Markdown codeblock \`\`\`json):
{
  "estimatedRatio": "Ước tính % L2 (ví dụ: 30%)",
  "assessment": "Đánh giá mức độ phù hợp (Beginner/Intermediate/Advanced)",
  "compliment": "Lời khen cụ thể về cách dùng từ hoặc ngữ cảnh",
  "suggestions": "Gợi ý cải thiện hoặc từ thay thế tốt hơn"
}
`;
    } else {
      return res.status(400).json({ error: 'Loại tác vụ không hợp lệ' });
    }

    // Danh sách model ưu tiên: Nếu model đầu bị nghẽn (high demand), tự động thử model kế tiếp
    const candidateModels = ['gemini-3.8-flash', 'gemini-2.5-flash'];
    let lastError = null;

    for (const modelName of candidateModels) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

      try {
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

        // Nếu máy chủ báo quá tải (503 / high demand), tiếp tục vòng lặp thử model dự phòng
        if (!response.ok) {
          lastError = data.error?.message || `Lỗi máy chủ (${response.status})`;
          if (response.status === 503 || lastError.includes('high demand') || lastError.includes('overloaded')) {
            continue;
          }
          return res.status(response.status).json({ error: lastError });
        }

        const rawResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
        const parsedData = JSON.parse(rawResult);
        return res.status(200).json(parsedData);

      } catch (err) {
        lastError = err.message;
      }
    }

    return res.status(503).json({ error: `Máy chủ AI đang quá tải tạm thời: ${lastError}. Bạn hãy thử lại sau ít giây nhé!` });

  } catch (err) {
    return res.status(500).json({ error: 'Không thể xử lý nội dung: ' + err.message });
  }
}