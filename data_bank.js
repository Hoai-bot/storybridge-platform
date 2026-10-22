/**
 * StoryBridge - Translanguaging Learning Platform
 * Comprehensive Story Data Bank across Multiple Languages (L2)
 */

const expandedStoriesData = {
    // -------------------------------------------------------------
    // ENGLISH (en)
    // -------------------------------------------------------------
    en: [
        {
            id: "en_story_1",
            title: "Một ngày ở trường Đại học",
            category: "Đời sống sinh viên",
            ratios: {
                1: "Buổi sáng, tôi bước vào <span class='l2-word' onclick='openWordModal(\"campus\", \"/ˈkæm.pəs/\", \"Khuôn viên trường\", \"Buổi sáng tôi bước vào campus.\")'>campus</span> với tâm trạng rất hào hứng. Hôm nay lớp tôi có một buổi <span class='l2-word' onclick='openWordModal(\"presentation\", \"/ˌprez.enˈteɪ.ʃən/\", \"Bài thuyết trình\", \"Hôm nay lớp có buổi presentation.\")'>presentation</span> quan trọng về ngành Marketing. Tôi và các bạn trong <span class='l2-word' onclick='openWordModal(\"team\", \"/tiːm/\", \"Nhóm học tập\", \"Các bạn trong team cùng cố gắng.\")'>team</span> đã chuẩn bị suốt tuần qua. Dù có chút <span class='l2-word' onclick='openWordModal(\"nervous\", \"/ˈnɝː.vəs/\", \"Lo lắng / Hồi hộp\", \"Dù có chút nervous nhưng tự tin.\")'>nervous</span>, nhưng mọi người đều rất nỗ lực.",
                2: "Buổi sáng, tôi bước vào <span class='l2-word' onclick='openWordModal(\"campus\", \"/ˈkæm.pəs/\", \"Khuôn viên trường\", \"Bước vào campus.\")'>campus</span> với <span class='l2-word' onclick='openWordModal(\"energy\", \"/ˈen.ɚ.dʒi/\", \"Năng lượng\", \"Tâm trạng tràn đầy energy.\")'>energy</span> tràn đầy. Hôm nay lớp tôi có một <span class='l2-word' onclick='openWordModal(\"important\", \"/ɪmˈpɔːr.tənt/\", \"Quan trọng\", \"Một important presentation.\")'>important</span> <span class='l2-word' onclick='openWordModal(\"presentation\", \"/ˌprez.enˈteɪ.ʃən/\", \"Bài thuyết trình\", \"Bài presentation về Marketing.\")'>presentation</span>. Chúng tôi đã <span class='l2-word' onclick='openWordModal(\"prepare\", \"/prɪˈper/\", \"Chuẩn bị\", \"Đã prepare suốt tuần.\")'>prepare</span> cả tuần. Mặc dù feel <span class='l2-word' onclick='openWordModal(\"nervous\", \"/ˈnɝː.vəs/\", \"Lo lắng\", \"Cảm thấy nervous.\")'>nervous</span>, mọi người vẫn tin sẽ <span class='l2-word' onclick='openWordModal(\"succeed\", \"/səkˈsiːd/\", \"Thành công\", \"Sẽ succeed thôi.\")'>succeed</span>.",
                3: "Every morning, I walk into <span class='l2-word' onclick='openWordModal(\"campus\", \"/ˈkæm.pəs/\", \"Khuôn viên trường\", \"Walk into campus.\")'>campus</span> với tinh thần tươi mới. Today our class has an <span class='l2-word' onclick='openWordModal(\"important\", \"/ɪmˈpɔːr.tənt/\", \"Quan trọng\", \"An important project.\")'>important</span> project. Our <span class='l2-word' onclick='openWordModal(\"team\", \"/tiːm/\", \"Nhóm\", \"Our team prepared.\")'>team</span> has <span class='l2-word' onclick='openWordModal(\"prepared\", \"/prɪˈperd/\", \"Đã chuẩn bị\", \"Has prepared for weeks.\")'>prepared</span> very hard. Although a bit <span class='l2-word' onclick='openWordModal(\"nervous\", \"/ˈnɝː.vəs/\", \"Lo lắng\", \"A bit nervous.\")'>nervous</span>, we believe we can <span class='l2-word' onclick='openWordModal(\"achieve\", \"/əˈtʃiːv/\", \"Đạt được\", \"Achieve high scores.\")'>achieve</span> high scores."
            },
            fullTranslation: "Buổi sáng, tôi bước vào khuôn viên trường đại học với tâm trạng tràn đầy năng lượng. Hôm nay lớp tôi có một bài thuyết trình quan trọng. Nhóm chúng tôi đã chuẩn bị cả tuần qua. Mặc dù có chút hồi hộp, mọi người đều tin tưởng sẽ đạt kết quả tốt."
        },
        {
            id: "en_story_2",
            title: "Phỏng vấn xin việc Part-time",
            category: "Kỹ năng & Sự nghiệp",
            ratios: {
                1: "Chiều nay mình đi phỏng vấn cho vị trí <span class='l2-word' onclick='openWordModal(\"part-time\", \"/ˌpɑːrtˈtaɪm/\", \"Bán thời gian\", \"Xin việc part-time.\")'>part-time</span> tại quán cà phê. Anh người quản lý hỏi về <span class='l2-word' onclick='openWordModal(\"experience\", \"/ɪkˈspɪr.i.əns/\", \"Kinh nghiệm\", \"Có kinh nghiệm giao tiếp.\")'>experience</span> phục vụ và cách mình xử lý tình huống khi gặp áp lực.",
                2: "Chiều nay mình đi <span class='l2-word' onclick='openWordModal(\"interview\", \"/ˈɪn.t̬ɚ.vjuː/\", \"Phỏng vấn\", \"Đi interview xin việc.\")'>interview</span> cho vị trí <span class='l2-word' onclick='openWordModal(\"part-time\", \"/ˌpɑːrtˈtaɪm/\", \"Bán thời gian\", \"Vị trí part-time.\")'>part-time</span>. Người quản lý hỏi về <span class='l2-word' onclick='openWordModal(\"experience\", \"/ɪkˈspɪr.i.əns/\", \"Kinh nghiệm\", \"Kinh nghiệm làm việc.\")'>experience</span> của mình. Cần phải thể hiện thái độ <span class='l2-word' onclick='openWordModal(\"confident\", \"/ˈkɑːn.fə.dənt/\", \"Tự tin\", \"Thái độ confident.\")'>confident</span> và linh hoạt.",
                3: "This afternoon I had a <span class='l2-word' onclick='openWordModal(\"part-time\", \"/ˌpɑːrtˈtaɪm/\", \"Bán thời gian\", \"Part-time interview.\")'>part-time</span> <span class='l2-word' onclick='openWordModal(\"interview\", \"/ˈɪn.t̬ɚ.vjuː/\", \"Phỏng vấn\", \"Job interview.\")'>interview</span>. The manager asked about my <span class='l2-word' onclick='openWordModal(\"experience\", \"/ɪkˈspɪr.i.əns/\", \"Kinh nghiệm\", \"Past experience.\")'>experience</span>. Being <span class='l2-word' onclick='openWordModal(\"confident\", \"/ˈkɑːn.fə.dənt/\", \"Tự tin\", \"Being confident is crucial.\")'>confident</span> is extremely important."
            },
            fullTranslation: "Chiều nay tôi đến phỏng vấn xin việc bán thời gian tại quán cà phê. Quản lý hỏi về kinh nghiệm làm việc và khả năng giải quyết áp lực. Sự tự tin là yếu tố quan trọng nhất."
        }
    ],

    // -------------------------------------------------------------
    // KOREAN (ko)
    // -------------------------------------------------------------
    ko: [
        {
            id: "ko_story_1",
            title: "Cuộc sống sinh viên tại Seoul",
            category: "Giao lưu văn hóa",
            ratios: {
                1: "Hôm nay mình cùng bạn ghé thăm <span class='l2-word' onclick='openWordModal(\"대학교\", \"[Dae-hak-gyo]\", \"Trường Đại học\", \"Đến 대학교 tham quan.\")'>대학교</span>. Thời tiết hôm nay rất <span class='l2-word' onclick='openWordModal(\"좋아요\", \"[Cho-a-yo]\", \"Rất đẹp / Tốt\", \"Thời tiết 좋아요.\")'>좋아요</span>. Bọn mình cùng ăn món bánh gạo cay.",
                2: "Hôm nay mình cùng <span class='l2-word' onclick='openWordModal(\"친구\", \"[Chin-gu]\", \"Bạn bè\", \"Cùng 친구 đi dạo.\")'>친구</span> đến <span class='l2-word' onclick='openWordModal(\"대학교\", \"[Dae-hak-gyo]\", \"Đại học\", \"Ghé 대학교.\")'>대학교</span>. Cảm thấy rất <span class='l2-word' onclick='openWordModal(\"행복해요\", \"[Haeng-bok-hae-yo]\", \"Hạnh phúc\", \"Cảm thấy 행복해요.\")'>행복해요</span>. Sau đó cùng học bài.",
                3: "오늘 <span class='l2-word' onclick='openWordModal(\"친구\", \"[Chin-gu]\", \"Bạn bè\", \"Cùng 친구.\")'>친구</span>와 함께 <span class='l2-word' onclick='openWordModal(\"대학교\", \"[Dae-hak-gyo]\", \"Đại học\", \"Đến 대학교.\")'>대학교</span>에 갔어요. 날씨가 thật sự <span class='l2-word' onclick='openWordModal(\"좋아요\", \"[Cho-a-yo]\", \"Rất đẹp\", \"Thời tiết 좋아요.\")'>좋아요</span>."
            },
            fullTranslation: "Hôm nay tôi cùng bạn bè ghé thăm trường đại học. Thời tiết rất tuyệt vời và chúng tôi cảm thấy rất hạnh phúc."
        }
    ],

    // -------------------------------------------------------------
    // JAPANESE (ja)
    // -------------------------------------------------------------
    ja: [
        {
            id: "ja_story_1",
            title: "Chuyến dạo quanh Tokyo",
            category: "Khám phá văn hóa",
            ratios: {
                1: "Buổi sáng ở Tokyo, mình đi dạo dưới hàng cây <span class='l2-word' onclick='openWordModal(\"桜\", \"[Sakura]\", \"Hoa anh đào\", \"Ngắm 桜 nở.\")'>桜</span>. Cảm giác thật là tuyệt vời! Sau đó ghé ăn mì Ramen.",
                2: "Sáng nay tại Tokyo, mình đi dạo ngắm <span class='l2-word' onclick='openWordModal(\"桜\", \"[Sakura]\", \"Hoa anh đào\", \"Hoa Sakura.\")'>桜</span>. Khung cảnh rất <span class='l2-word' onclick='openWordModal(\"きれい\", \"[Kirei]\", \"Đẹp\", \"Khung cảnhきれい.\")'>きれい</span>. Buổi trưa ăn cùng <span class='l2-word' onclick='openWordModal(\"友達\", \"[Tomodachi]\", \"Bạn bè\", \"Cùng 友達 đi ăn.\")'>友達</span>.",
                3: "東京の朝, <span class='l2-word' onclick='openWordModal(\"桜\", \"[Sakura]\", \"Hoa anh đào\", \"Ngắm Sakura.\")'>桜</span>が thật sự <span class='l2-word' onclick='openWordModal(\"きれい\", \"[Kirei]\", \"Đẹp\", \"Khung cảnhきれい.\")'>きれい</span>です. Thật là một ngày tuyệt vời."
            },
            fullTranslation: "Buổi sáng ở Tokyo, tôi đi dạo dưới những hàng hoa anh đào rực rỡ. Khung cảnh thật xinh đẹp và tôi cùng bạn bè thưởng thức bát mì Ramen nóng hổi."
        }
    ],

    // -------------------------------------------------------------
    // CHINESE (zh)
    // -------------------------------------------------------------
    zh: [
        {
            id: "zh_story_1",
            title: "Công nghệ và Giới trẻ",
            category: "Xu hướng & Đời sống",
            ratios: {
                1: "Giới trẻ ngày nay rất thích dùng <span class='l2-word' onclick='openWordModal(\"手机\", \"[Shǒujī]\", \"Điện thoại di động\", \"Sử dụng 手机.\")'>手机</span> để học tập và làm việc.",
                2: "Gen Z thường dùng <span class='l2-word' onclick='openWordModal(\"手机\", \"[Shǒujī]\", \"Điện thoại\", \"Dùng 手机 daily.\")'>手机</span> để giao tiếp với <span class='l2-word' onclick='openWordModal(\"朋友\", \"[Péngyǒu]\", \"Bạn bè\", \"Nhắn tin với 朋友.\")'>朋友</span>. Rất tiện lợi.",
                3: "现代年轻人喜欢用 <span class='l2-word' onclick='openWordModal(\"手机\", \"[Shǒujī]\", \"Điện thoại\", \"Dùng điện thoại.\")'>手机</span> trò chuyện cùng <span class='l2-word' onclick='openWordModal(\"朋友\", \"[Péngyǒu]\", \"Bạn bè\", \"Cùng bạn bè.\")'>朋友</span>."
            },
            fullTranslation: "Giới trẻ ngày nay rất thích sử dụng điện thoại di động để học tập và trò chuyện cùng bạn bè. Công nghệ giúp kết nối mọi người dễ dàng hơn."
        }
    ],

    // -------------------------------------------------------------
    // FRENCH (fr)
    // -------------------------------------------------------------
    fr: [
        {
            id: "fr_story_1",
            title: "Góc Cà Phê Paris",
            category: "Nghệ thuật & LIFESTYLE",
            ratios: {
                1: "Cuối tuần, tôi thích ngồi ở một góc quán nhỏ, đọc cuốn <span class='l2-word' onclick='openWordModal(\"roman\", \"/ʁɔ.mɑ̃/\", \"Tiểu thuyết\", \"Đọc cuốn roman hay.\")'>roman</span> và thưởng thức bánh croissant.",
                2: "Cuối tuần tôi đến quán <span class='l2-word' onclick='openWordModal(\"café\", \"/ka.fe/\", \"Quán cà phê\", \"Ngồi quán café.\")'>café</span>, đọc sách <span class='l2-word' onclick='openWordModal(\"roman\", \"/ʁɔ.mɑ̃/\", \"Tiểu thuyết\", \"Đọc roman.\")'>roman</span>. Khung cảnh rất <span class='l2-word' onclick='openWordModal(\"magnifique\", \"/ma.ɲi.fik/\", \"Tuyệt đẹp\", \"Thật magnifique.\")'>magnifique</span>.",
                3: "Chaque week-end, j'aime đọc <span class='l2-word' onclick='openWordModal(\"roman\", \"/ʁɔ.mɑ̃/\", \"Tiểu thuyết\", \"Livre roman.\")'>roman</span> tại quán <span class='l2-word' onclick='openWordModal(\"café\", \"/ka.fe/\", \"Cà phê\", \"Quán café.\")'>café</span>. Bầu không khí thật <span class='l2-word' onclick='openWordModal(\"magnifique\", \"/ma.ɲi.fik/\", \"Tuyệt diệu\", \"Không khí magnifique.\")'>magnifique</span>."
            },
            fullTranslation: "Mỗi cuối tuần, tôi thích ngồi tại một quán cà phê yên tĩnh, đọc tiểu thuyết và thưởng thức bánh sừng bò thơm ngon. Bầu không khí thật lãng mạn và tuyệt vời."
        }
    ]
};

// Export or expose globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = expandedStoriesData;
}