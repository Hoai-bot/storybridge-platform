/**
 * StoryBridge Voice Engine
 * Module xử lý Giọng nói (STT & TTS) 0 đồng dành cho StoryBridge Platform.
 * Tận dụng tối đa Web Speech API tích hợp sẵn trên trình duyệt.
 */

const VoiceEngine = {
    // Cấu hình ngôn ngữ mặc định
    langMap: {
        en: 'en-US',
        ko: 'ko-KR',
        ja: 'ja-JP',
        zh: 'zh-CN',
        fr: 'fr-FR',
        vi: 'vi-VN'
    },

    recognition: null,
    isRecording: false,

    /**
     * Initialize Voice Module
     */
    init() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
        } else {
            console.warn("[VoiceEngine] Trình duyệt không hỗ trợ Web Speech Recognition.");
        }
    },

    /**
     * 1. TEXT-TO-SPEECH (TTS) - Phát âm từ hoặc câu
     * @param {string} text - Từ hoặc đoạn văn cần phát âm
     * @param {string} l2Code - Mã ngôn ngữ L2 ('en', 'ko', 'ja', 'zh', 'fr', 'vi')
     * @param {number} rate - Tốc độ đọc (mặc định 0.85 cho người mới học)
     */
    speak(text, l2Code = 'en', rate = 0.85) {
        if (!('speechSynthesis' in window)) {
            alert('Trình duyệt của bạn không hỗ trợ tính năng phát âm.');
            return;
        }

        // Hủy mọi âm thanh đang phát dở
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = this.langMap[l2Code] || 'en-US';
        utterance.rate = rate;
        utterance.pitch = 1.0;

        window.speechSynthesis.speak(utterance);
    },

    /**
     * 2. SPEECH-TO-TEXT (STT) - Ghi âm và nhận diện giọng nói người học
     * @param {string} l2Code - Mã ngôn ngữ cần nhận diện ('en', 'vi',...)
     * @param {function} onResultCallback - Callback nhận về kết quả dạng text
     * @param {function} onErrorCallback - Callback xử lý khi có lỗi
     */
    startListening(l2Code = 'en', onResultCallback, onErrorCallback) {
        if (!this.recognition) {
            if (onErrorCallback) onErrorCallback("Trình duyệt không hỗ trợ nhận diện giọng nói.");
            return;
        }

        if (this.isRecording) {
            this.stopListening();
        }

        this.recognition.lang = this.langMap[l2Code] || 'en-US';
        this.isRecording = true;

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            this.isRecording = false;
            if (onResultCallback) onResultCallback(transcript);
        };

        this.recognition.onerror = (event) => {
            this.isRecording = false;
            if (onErrorCallback) onErrorCallback(event.error);
        };

        this.recognition.onend = () => {
            this.isRecording = false;
        };

        try {
            this.recognition.start();
        } catch (e) {
            this.isRecording = false;
            if (onErrorCallback) onErrorCallback(e.message);
        }
    },

    /**
     * Dừng ghi âm thủ công
     */
    stopListening() {
        if (this.recognition && this.isRecording) {
            this.recognition.stop();
            this.isRecording = false;
        }
    }
};

// Tự động khởi tạo VoiceEngine khi load trang
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        VoiceEngine.init();
    });
}