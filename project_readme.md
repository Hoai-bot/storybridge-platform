# 🌉 StoryBridge - Translanguaging Learning Platform

> **Học ngôn ngữ tự nhiên dành cho sinh viên thông qua phương pháp pha trộn ngôn ngữ (Translanguaging & Code-Switching).**

StoryBridge là một nền tảng web ứng dụng triết lý **Translanguaging**, cho phép người học tiếp cận ngôn ngữ thứ hai ($L2$) một cách tự nhiên thông qua việc đan xen với ngôn ngữ mẹ đẻ ($L1$). Phương pháp này giảm bớt rào cản tâm lý "sợ nói sai", giúp não bộ tiếp thu từ vựng và ngữ cảnh nhanh hơn.

---

## ✨ Tính năng nổi bật

- **📚 Thư viện Bài đọc Đan ngữ (Interactive Translanguaging Reader):**
  - Chuyển đổi linh hoạt giữa 3 cấp độ tỷ lệ Code-Switching:
    - 🌱 **Nhập môn:** 80% $L1$ + 20% $L2$
    - 🚀 **Tự tin:** 50% $L1$ + 50% $L2$
    - 🔥 **Thách thức:** 20% $L1$ + 80% $L2$
  - Hỗ trợ xem bản dịch đối chiếu song song (**Dual View**).
  - Tra từ trực tiếp bằng cách nhấp vào từ $L2$ nổi bật.

- **🎙️ Phát âm Chuẩn Text-to-Speech (TTS):**
  - Tích hợp công nghệ `SpeechSynthesis` miễn phí ngay tại trình duyệt.
  - Hỗ trợ đa ngôn ngữ $L2$: **Tiếng Anh (🇺🇸), Tiếng Hàn (🇰🇷), Tiếng Nhật (🇯🇵), Tiếng Trung (🇨🇳), Tiếng Pháp (🇫🇷)**.

- **✍️ Nhật Ký & AI Assist (Translanguaging Journal):**
  - Tự do viết nhật ký hoặc đoạn văn pha trộn $L1$ & $L2$.
  - Trợ lý AI phân tích tỷ lệ hòa nhập ngôn ngữ và gợi ý nâng cấp từ vựng ngữ cảnh (*Vocabulary Booster*).

- **🎴 Flashcard Ngữ Cảnh & Mini-Game:**
  - Lật thẻ ghi nhớ từ vựng gắn liền với câu ngữ cảnh $L1$ đan xen.
  - Mini-Game trắc nghiệm điền từ phù hợp vào câu đan ngữ giúp tăng phản xạ.

- **📊 Dashboard & Lưu trữ Cục bộ (Zero-cost LocalStorage):**
  - Theo dõi tiến trình học tập, biểu đồ tăng trưởng từ vựng $L2$ và chuỗi Streak.
  - Tự động lưu sổ từ vựng người dùng vào `LocalStorage` của trình duyệt mà không tốn chi phí Server/Database.

---

## 🛠️ Công nghệ sử dụng (Zero-Cost Stack)

StoryBridge được thiết kế theo tiêu chí **0 đồng chi phí (Zero-cost Stack)**, vận hành hoàn toàn trên Client-side và các dịch vụ đám mây Free Tier:

- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS (CDN)
- **UI Components & Icons:** Lucide Icons, Google Fonts (*Be Vietnam Pro* & *Plus Jakarta Sans*)
- **Data Visualization:** Chart.js
- **Audio Engine:** Web Speech API (SpeechSynthesis)
- **Data Storage:** Browser LocalStorage
- **AI Engine (Tùy chọn):** Groq API Free Tier / Google Gemini API (Llama 3 / Mixtral models)

---

## 📁 Cấu trúc dự án

```text
StoryBridge/
├── index.html                                 # Trang chính ứng dụng (Single File App)
├── storybridge_translanguaging_learning_platform.html  # Bản sao phát triển nền tảng
└── README.md                                  # Tài liệu hướng dẫn dự án
```

---

## 🚀 Hướng dẫn chạy dự án

### Chạy trực tiếp trên máy (Local):
1. Tải hoặc `git clone` kho lưu trữ về máy.
2. Mở file `index.html` (hoặc `storybridge_translanguaging_learning_platform.html`) trực tiếp bằng bất kỳ trình duyệt web nào (Chrome, Edge, Safari, Firefox). Không cần cài đặt `npm` hay dựng Server local!

### Triển khai Online 0 đồng (Cloudflare Pages):
1. Đăng ký tài khoản miễn phí tại [Cloudflare](https://dash.cloudflare.com/).
2. Vào **Workers & Pages** -> chọn **Create application** -> **Pages** -> **Upload assets**.
3. Tải file `index.html` lên và nhấn **Deploy**.
4. Ứng dụng của bạn sẽ hoạt động online 24/7 tại địa chỉ dạng: `https://storybridge.pages.dev`.

---

## 📄 Giấy phép (License)

Dự án được phát hành dưới giấy phép [MIT License](LICENSE). Được tự do phát triển và sử dụng cho mục đích phi thương mại.
```