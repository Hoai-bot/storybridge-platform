/**
 * StoryBridge Content Library
 * Chuyên sâu cặp ngôn ngữ: Tiếng Việt (L1) - Tiếng Anh (L2)
 */

const storyLibrary = {
  // 🌱 LEVEL 1: Nhập môn (20% L2 Code-Switching)
  beginner: [
    {
      id: "en_b1",
      title: "Bài 1: Buổi sáng ở Trường Đại học",
      category: "🌱 Đời sống sinh viên",
      content: "Mỗi buổi sáng, tôi đến <span class='l2-word' onclick='openWordModal(\"campus\", \"/ˈkæm.pəs/\", \"Khuôn viên trường\", \"Buổi sáng tôi bước vào campus.\")'>campus</span> với tinh thần tươi mới. Hôm nay lớp tôi có một buổi <span class='l2-word' onclick='openWordModal(\"presentation\", \"/ˌprez.enˈteɪ.ʃən/\", \"Bài thuyết trình\", \"Hôm nay lớp có buổi presentation.\")'>presentation</span> quan trọng về ngành Marketing. Tôi và các bạn trong <span class='l2-word' onclick='openWordModal(\"team\", \"/tiːm/\", \"Nhóm học tập\", \"Các bạn trong team cùng cố gắng.\")'>team</span> đã chuẩn bị suốt tuần qua. Dù có chút <span class='l2-word' onclick='openWordModal(\"nervous\", \"/ˈnɝː.vəs/\", \"Lo lắng / Hồi hộp\", \"Dù có chút nervous nhưng tự tin.\")'>nervous</span>, nhưng mọi người đều rất nỗ lực.",
      fullTranslation: "Buổi sáng, tôi bước vào khuôn viên trường đại học với tâm trạng tràn đầy năng lượng. Hôm nay lớp tôi có một bài thuyết trình quan trọng. Nhóm chúng tôi đã chuẩn bị cả tuần qua."
    },
    {
      id: "en_b2",
      title: "Bài 2: Đi cà phê làm bài tập nhóm",
      category: "🌱 Thói quen hàng ngày",
      content: "Cuối tuần, nhóm mình hẹn gặp ở <span class='l2-word' onclick='openWordModal(\"coffee shop\", \"/ˈkɑː.fi ʃɑːp/\", \"Quán cà phê\", \"Hẹn gặp ở coffee shop gần trường.\")'>coffee shop</span> gần trường để giải quyết đống <span class='l2-word' onclick='openWordModal(\"homework\", \"/ˈhoʊm.wɝːk/\", \"Bài tập về nhà\", \"Giải quyết đống homework.\")'>homework</span> tồn đọng. Không gian ở đây rất <span class='l2-word' onclick='openWordModal(\"quiet\", \"/ˈkwaɪ.ət/\", \"Yên tĩnh\", \"Không gian rất quiet.\")'>quiet</span> và có Wifi nhanh, giúp cả nhóm <span class='l2-word' onclick='openWordModal(\"focus\", \"/ˈfoʊ.kəs/\", \"Tập trung\", \"Giúp cả nhóm focus làm bài.\")'>focus</span> làm việc hiệu quả hơn hẳn.",
      fullTranslation: "Cuối tuần, nhóm mình hẹn gặp ở quán cà phê gần trường để giải quyết đống bài tập tồn đọng. Không gian ở đây rất yên tĩnh và có Wifi nhanh, giúp cả nhóm tập trung làm việc hiệu quả hơn hẳn."
    },
    {
      id: "en_b3",
      title: "Bài 3: Áp lực FOMO khi lướt Mạng Xã Hội",
      category: "🌱 Mạng xã hội & Trend",
      content: "Mỗi tối trước khi ngủ, tôi thường dành hàng giờ để lướt <span class='l2-word' onclick='openWordModal(\"social media\", \"/ˈsoʊ.ʃəl ˈmiː.di.ə/\", \"Mạng xã hội\", \"Dành thời gian lướt social media.\")'>social media</span>. Thấy bạn bè liên tục đăng ảnh đi chơi, tôi cảm thấy khá <span class='l2-word' onclick='openWordModal(\"anxious\", \"/ˈæŋk.ʃəs/\", \"Lo âu / Bồn chồn\", \"Cảm thấy khá anxious.\")'>anxious</span>. Đây chính là hội chứng <span class='l2-word' onclick='openWordModal(\"FOMO\", \"/ˈfoʊ.moʊ/\", \"Hội chứng sợ bỏ lỡ\", \"Hội chứng FOMO của giới trẻ.\")'>FOMO</span> phổ biến. Tôi tự nhủ cần giảm <span class='l2-word' onclick='openWordModal(\"screen time\", \"/ˈskriːn taɪm/\", \"Thời gian dùng màn hình\", \"Giảm bớt screen time.\")'>screen time</span>.",
      fullTranslation: "Mỗi tối trước khi ngủ, tôi thường dành hàng giờ để lướt mạng xã hội. Thấy bạn bè liên tục đăng ảnh đi chơi, tôi cảm thấy khá lo âu. Đây chính là hội chứng FOMO sợ bỏ lỡ. Tôi tự nhủ cần giảm thời gian dùng màn hình."
    }
  ],

  // 🚀 LEVEL 2: Tự tin (50% L2 Code-Switching)
  intermediate: [
    {
      id: "en_i1",
      title: "Bài 1: Kế hoạch làm đồ án môn học",
      category: "🚀 Học tập & Dự án",
      content: "Our <span class='l2-word' onclick='openWordModal(\"team\", \"/tiːm/\", \"Nhóm\", \"Our team needs to complete.\")'>team</span> cần <span class='l2-word' onclick='openWordModal(\"complete\", \"/kəmˈpliːt/\", \"Hoàn thành\", \"Complete this project.\")'>complete</span> dự án này trước <span class='l2-word' onclick='openWordModal(\"deadline\", \"/ˈded.laɪn/\", \"Hạn chót\", \"Before next week deadline.\")'>deadline</span> tuần sau. Trưởng nhóm đã <span class='l2-word' onclick='openWordModal(\"assign\", \"/əˈsaɪn/\", \"Phân công\", \"Assign tasks to everyone.\")'>assign</span> công việc cụ thể cho từng thành viên để đảm bảo tiến độ.",
      fullTranslation: "Nhóm chúng tôi cần hoàn thành dự án này trước hạn chót tuần sau. Trưởng nhóm đã phân công công việc cụ thể cho từng thành viên để đảm bảo tiến độ."
    },
    {
      id: "en_i2",
      title: "Bài 2: Trải nghiệm cuộc chiến săn vé Concert",
      category: "🚀 Mạng xã hội & Sự kiện",
      content: "Tuần trước, nhóm mình đã tham gia cuộc chiến <span class='l2-word' onclick='openWordModal(\"ticket hunting\", \"/ˈtɪk.ɪt ˈhʌn.tɪŋ/\", \"Săn vé\", \"Participate in ticket hunting.\")'>ticket hunting</span> cho concert của thần tượng. Ngay khi mở bán, hàng ngàn người đã <span class='l2-word' onclick='openWordModal(\"access\", \"/ˈæk.ses/\", \"Truy cập\", \"Access the website.\")'>access</span> cùng lúc. Dù rất <span class='l2-word' onclick='openWordModal(\"stressful\", \"/ˈstres.fəl/\", \"Căng thẳng\", \"Very stressful experience.\")'>stressful</span>, tụi mình đã <span class='l2-word' onclick='openWordModal(\"successfully\", \"/səkˈses.fəl.i/\", \"Thành công\", \"Successfully booked.\")'>successfully</span> đặt được 2 vé.",
      fullTranslation: "Tuần trước, nhóm mình đã tham gia cuộc chiến săn vé cho concert của thần tượng. Ngay khi mở bán, hàng ngàn người đã truy cập cùng lúc. Dù rất căng thẳng, tụi mình đã đặt thành công 2 vé."
    },
    {
      id: "en_i3",
      title: "Bài 3: Phỏng vấn xin việc làm thêm",
      category: "🚀 Kỹ năng nghề nghiệp",
      content: "Hôm nay mình có buổi <span class='l2-word' onclick='openWordModal(\"interview\", \"/ˈɪn.t̬ɚ.vjuː/\", \"Phỏng vấn\", \"An interview for part-time job.\")'>interview</span> vị trí nhân viên trợ giảng. Người phỏng vấn nhấn mạnh tầm quan trọng của <span class='l2-word' onclick='openWordModal(\"communication\", \"/kəˌmjuː.nəˈkeɪ.ʃən/\", \"Kỹ năng giao tiếp\", \"Communication skills.\")'>communication</span> và thái độ <span class='l2-word' onclick='openWordModal(\"responsible\", \"/rɪˈspɑːn.sə.bəl/\", \"Trách nhiệm\", \"Responsible attitude.\")'>responsible</span>.",
      fullTranslation: "Hôm nay mình có buổi phỏng vấn vị trí nhân viên trợ giảng. Người phỏng vấn nhấn mạnh tầm quan trọng của kỹ năng giao tiếp và thái độ trách nhiệm."
    }
  ],

  // 🔥 LEVEL 3: Thách thức (80% L2 Code-Switching)
  advanced: [
    {
      id: "en_a1",
      title: "Bài 1: Thảo luận về Công nghệ AI",
      category: "🔥 Công nghệ & Đổi mới",
      content: "<span class='l2-word' onclick='openWordModal(\"Artificial intelligence\", \"/ˌɑːr.t̬ə.fɪʃ.əl ɪnˈtel.ə.dʒəns/\", \"Trí tuệ nhân tạo\", \"AI is transforming education.\")'>Artificial intelligence</span> is transforming how we learn languages efficiently. It provides <span class='l2-word' onclick='openWordModal(\"personalized\", \"/ˈpɝː.sən.əl.aɪzd/\", \"Cá nhân hóa\", \"Personalized feedback.\")'>personalized</span> feedback and creates <span class='l2-word' onclick='openWordModal(\"interactive\", \"/ˌɪn.t̬ɚˈæk.tɪv/\", \"Tương tác\", \"Interactive environments.\")'>interactive</span> learning environments cho sinh viên toàn cầu.",
      fullTranslation: "Trí tuệ nhân tạo đang thay đổi cách chúng ta học ngôn ngữ một cách hiệu quả. Nó cung cấp phản hồi mang tính cá nhân hóa và tạo ra môi trường học tập tương tác cho sinh viên toàn cầu."
    },
    {
      id: "en_a2",
      title: "Bài 2: Sức ảnh hưởng của Viral Trends",
      category: "🔥 Mạng xã hội & Trend",
      content: "Nowadays, short-form video platforms like TikTok have the power to create <span class='l2-word' onclick='openWordModal(\"viral trends\", \"/ˈvaɪ.rəl trendz/\", \"Xu hướng lan truyền\", \"Create viral trends.\")'>viral trends</span> overnight. While these trends bring entertainment, they can also cause <span class='l2-word' onclick='openWordModal(\"peer pressure\", \"/pɪr ˈpreʃ.ɚ/\", \"Áp lực đồng lứa\", \"Cause peer pressure.\")'>peer pressure</span>. Learning to enjoy content <span class='l2-word' onclick='openWordModal(\"critically\", \"/ˈkrɪt̬.ɪ.kəl.i/\", \"Có chọn lọc / Phản biện\", \"Think critically.\")'>critically</span> is essential.",
      fullTranslation: "Ngày nay, các nền tảng video ngắn như TikTok có khả năng tạo ra các xu hướng lan truyền chỉ sau một đêm. Mặc dù các xu hướng này mang lại sự giải trí, chúng cũng có thể gây áp lực đồng lứa. Học cách tiếp nhận nội dung có chọn lọc là điều cốt lõi."
    }
  ]
};