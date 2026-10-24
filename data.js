/**
 * StoryBridge Content Library
 * Chuyên sâu cặp ngôn ngữ: Tiếng Việt (L1) - Tiếng Anh (L2)
 * 30 bài học đa dạng theo tỷ lệ Translanguaging (10 bài/cấp độ)
 */

const storyLibrary = {
  // =========================================================================
  // 🌱 LEVEL 1: NHẬP MÔN (20% L2 Code-Switching) - 10 BÀI
  // =========================================================================
  beginner: [
    {
      id: "en_b1",
      title: "Bài 1: Buổi sáng ở Trường Đại học",
      category: "🌱 Đời sống sinh viên",
      content: "Mỗi buổi sáng, tôi đến <span class='l2-word' onclick='openWordModal(\"campus\", \"/ˈkæm.pəs/\", \"Khuôn viên trường\")'>campus</span> với tinh thần tươi mới. Hôm nay lớp tôi có một buổi <span class='l2-word' onclick='openWordModal(\"presentation\", \"/ˌprez.enˈteɪ.ʃən/\", \"Bài thuyết trình\")'>presentation</span> quan trọng về ngành Marketing. Tôi và các bạn trong <span class='l2-word' onclick='openWordModal(\"team\", \"/tiːm/\", \"Nhóm học tập\")'>team</span> đã chuẩn bị suốt tuần qua. Dù có chút <span class='l2-word' onclick='openWordModal(\"nervous\", \"/ˈnɝː.vəs/\", \"Lo lắng / Hồi hộp\")'>nervous</span>, nhưng mọi người đều rất nỗ lực.",
      fullTranslation: "Buổi sáng, tôi bước vào khuôn viên trường đại học với tâm trạng tràn đầy năng lượng. Hôm nay lớp tôi có một bài thuyết trình quan trọng. Nhóm chúng tôi đã chuẩn bị cả tuần qua."
    },
    {
      id: "en_b2",
      title: "Bài 2: Đi cà phê làm bài tập nhóm",
      category: "🌱 Thói quen hàng ngày",
      content: "Cuối tuần, nhóm mình hẹn gặp ở <span class='l2-word' onclick='openWordModal(\"coffee shop\", \"/ˈkɑː.fi ʃɑːp/\", \"Quán cà phê\")'>coffee shop</span> gần trường để giải quyết đống <span class='l2-word' onclick='openWordModal(\"homework\", \"/ˈhoʊm.wɝːk/\", \"Bài tập về nhà\")'>homework</span> tồn đọng. Không gian ở đây rất <span class='l2-word' onclick='openWordModal(\"quiet\", \"/ˈkwaɪ.ət/\", \"Yên tĩnh\")'>quiet</span> và có Wifi nhanh, giúp cả nhóm <span class='l2-word' onclick='openWordModal(\"focus\", \"/ˈfoʊ.kəs/\", \"Tập trung\")'>focus</span> làm việc hiệu quả hơn hẳn.",
      fullTranslation: "Cuối tuần, nhóm mình hẹn gặp ở quán cà phê gần trường để giải quyết đống bài tập tồn đọng. Không gian ở đây rất yên tĩnh và có Wifi nhanh, giúp cả nhóm tập trung làm việc hiệu quả hơn hẳn."
    },
    {
      id: "en_b3",
      title: "Bài 3: Áp lực FOMO khi lướt Mạng Xã Hội",
      category: "🌱 Mạng xã hội & Trend",
      content: "Mỗi tối trước khi ngủ, tôi thường dành hàng giờ để lướt <span class='l2-word' onclick='openWordModal(\"social media\", \"/ˈsoʊ.ʃəl ˈmiː.di.ə/\", \"Mạng xã hội\")'>social media</span>. Thấy bạn bè liên tục đăng ảnh đi chơi, tôi cảm thấy khá <span class='l2-word' onclick='openWordModal(\"anxious\", \"/ˈæŋk.ʃəs/\", \"Lo âu / Bồn chồn\")'>anxious</span>. Đây chính là hội chứng <span class='l2-word' onclick='openWordModal(\"FOMO\", \"/ˈfoʊ.moʊ/\", \"Hội chứng sợ bỏ lỡ\")'>FOMO</span> phổ biến. Tôi tự nhủ cần giảm <span class='l2-word' onclick='openWordModal(\"screen time\", \"/ˈskriːn taɪm/\", \"Thời gian dùng màn hình\")'>screen time</span>.",
      fullTranslation: "Mỗi tối trước khi ngủ, tôi thường dành hàng giờ để lướt mạng xã hội. Thấy bạn bè liên tục đăng ảnh đi chơi, tôi cảm thấy khá lo âu. Đây chính là hội chứng sợ bỏ lỡ. Tôi tự nhủ cần giảm thời gian nhìn màn hình."
    },
    {
      id: "en_b4",
      title: "Bài 4: Đăng ký câu lạc bộ tiếng Anh",
      category: "🌱 Hoạt động ngoại khóa",
      content: "Đầu kỳ học, mình quyết định tham gia một <span class='l2-word' onclick='openWordModal(\"club\", \"/klʌb/\", \"Câu lạc bộ\")'>club</span> kỹ năng giao tiếp. Để trở thành <span class='l2-word' onclick='openWordModal(\"member\", \"/ˈmem.bɚ/\", \"Thành viên\")'>member</span> chính thức, mình phải trải qua vòng phỏng vấn ngắn. Mục tiêu của mình là mở rộng <span class='l2-word' onclick='openWordModal(\"network\", \"/ˈnet.wɝːk/\", \"Mạng lưới quan hệ\")'>network</span> bạn bè mới.",
      fullTranslation: "Đầu kỳ học, mình quyết định tham gia câu lạc bộ kỹ năng. Để trở thành thành viên chính thức, mình cần phỏng vấn ngắn với mục tiêu mở rộng mạng lưới bạn bè."
    },
    {
      id: "en_b5",
      title: "Bài 5: Đi siêu thị tự nấu ăn cuối tuần",
      category: "🌱 Đời sống sinh viên",
      content: "Chiều thứ Bảy, mình cùng bạn cùng phòng đi <span class='l2-word' onclick='openWordModal(\"supermarket\", \"/ˈsuː.pɚˌmɑːr.kɪt/\", \"Siêu thị\")'>supermarket</span> mua nguyên liệu. Tụi mình lên sẵn một <span class='l2-word' onclick='openWordModal(\"shopping list\", \"/ˈʃɑː.pɪŋ lɪst/\", \"Danh sách mua sắm\")'>shopping list</span> chi tiết để không bị chi tiêu vượt mức <span class='l2-word' onclick='openWordModal(\"budget\", \"/ˈbʌdʒ.ɪt/\", \"Ngân sách\")'>budget</span> cho phép.",
      fullTranslation: "Chiều thứ Bảy, mình đi siêu thị mua sắm theo danh sách chuẩn bị sẵn để kiểm soát ngân sách chi tiêu."
    },
    {
      id: "en_b6",
      title: "Bài 6: Một ngày đọc sách ở thư viện trường",
      category: "🌱 Học tập & Kỹ năng",
      content: "Không gian ở <span class='l2-word' onclick='openWordModal(\"library\", \"/ˈlaɪ.brer.i/\", \"Thư viện\")'>library</span> trường mình luôn tràn ngập ánh sáng. Mình thường mượn thêm <span class='l2-word' onclick='openWordModal(\"textbooks\", \"/ˈtekst.bʊks/\", \"Sách giáo trình\")'>textbooks</span> tham khảo để tìm ý tưởng mới cho bài luận sắp nộp.",
      fullTranslation: "Thư viện trường luôn đủ ánh sáng và yên tĩnh để mình mượn sách giáo trình và nghiên cứu bài luận."
    },
    {
      id: "en_b7",
      title: "Bài 7: Luyện tập thể thao sau giờ tan lớp",
      category: "🌱 Sức khỏe & Thể thao",
      content: "Sau những tiết học căng thẳng, tập thể dục là một <span class='l2-word' onclick='openWordModal(\"habit\", \"/ˈhæb.ɪt/\", \"Thói quen\")'>habit</span> tốt. Mình thường ghé <span class='l2-word' onclick='openWordModal(\"gym\", \"/dʒɪm/\", \"Phòng tập thể dục\")'>gym</span> khoảng 45 phút để tái tạo lại nguồn <span class='l2-word' onclick='openWordModal(\"energy\", \"/ˈen.ɚ.dʒi/\", \"Năng lượng\")'>energy</span> tích cực.",
      fullTranslation: "Tập luyện thể thao là thói quen tốt giúp mình tái tạo năng lượng sau giờ học căng thẳng."
    },
    {
      id: "en_b8",
      title: "Bài 8: Trải nghiệm đặt món ăn qua ứng dụng",
      category: "🌱 Tiện ích công nghệ",
      content: "Trời mưa to nên mình chọn dùng <span class='l2-word' onclick='openWordModal(\"delivery app\", \"/dɪˈlɪv.ɚ.i æp/\", \"Ứng dụng giao hàng\")'>delivery app</span> để gọi bữa trưa. Nhập được mã <span class='l2-word' onclick='openWordModal(\"discount\", \"/ˈdɪs.kaʊnt/\", \"Giảm giá / Ưu đãi\")'>discount</span> hấp dẫn giúp tiết kiệm được một khoản tiền nhỏ.",
      fullTranslation: "Trời mưa nên mình đặt đồ ăn qua ứng dụng giao hàng và áp dụng mã giảm giá để tiết kiệm."
    },
    {
      id: "en_b9",
      title: "Bài 9: Viết Email xin nghỉ phép lịch sự",
      category: "🌱 Kỹ năng giao tiếp",
      content: "Khi bị ốm đột xuất, việc gửi một <span class='l2-word' onclick='openWordModal(\"formal email\", \"/ˈfɔːr.məl ˈiː.meɪl/\", \"Email trang trọng\")'>formal email</span> đến giảng viên là điều bắt buộc. Cần trình bày rõ lý do và đính kèm giấy khám để thể hiện thái độ <span class='l2-word' onclick='openWordModal(\"polite\", \"/pəˈlaɪt/\", \"Lịch sự\")'>polite</span>.",
      fullTranslation: "Khi bị ốm, việc gửi email lịch sự và trang trọng đến thầy cô giáo là cách ứng xử chuyên nghiệp."
    },
    {
      id: "en_b10",
      title: "Bài 10: Lên kế hoạch quản lý thời gian",
      category: "🌱 Kỹ năng cá nhân",
      content: "Để không bị dồn bài tập trước kỳ thi, mình ghi chú mọi lịch trình vào <span class='l2-word' onclick='openWordModal(\"planner\", \"/ˈplæn.ɚ/\", \"Sổ tay kế hoạch\")'>planner</span> cá nhân. Việc phân loại nhiệm vụ theo thứ tự <span class='l2-word' onclick='openWordModal(\"priority\", \"/praɪˈɔːr.ə.t̬i/\", \"Mức độ ưu tiên\")'>priority</span> giúp giảm căng thẳng rõ rệt.",
      fullTranslation: "Ghi chép kế hoạch vào sổ tay và sắp xếp công việc theo thứ tự ưu tiên giúp mình tránh bị quá tải."
    }
  ],

  // =========================================================================
  // 🚀 LEVEL 2: TỰ TIN (50% L2 Code-Switching) - 10 BÀI
  // =========================================================================
  intermediate: [
    {
      id: "en_i1",
      title: "Bài 1: Kế hoạch làm đồ án môn học",
      category: "🚀 Học tập & Dự án",
      content: "Our <span class='l2-word' onclick='openWordModal(\"team\", \"/tiːm/\", \"Nhóm\")'>team</span> cần <span class='l2-word' onclick='openWordModal(\"complete\", \"/kəmˈpliːt/\", \"Hoàn thành\")'>complete</span> dự án này trước <span class='l2-word' onclick='openWordModal(\"deadline\", \"/ˈded.laɪn/\", \"Hạn chót\")'>deadline</span> tuần sau. Trưởng nhóm đã <span class='l2-word' onclick='openWordModal(\"assign\", \"/əˈsaɪn/\", \"Phân công\")'>assign</span> công việc cụ thể cho từng thành viên để đảm bảo tiến độ.",
      fullTranslation: "Nhóm chúng tôi cần hoàn thành dự án trước hạn chót tuần sau. Trưởng nhóm đã phân công công việc cụ thể cho từng người."
    },
    {
      id: "en_i2",
      title: "Bài 2: Trải nghiệm cuộc chiến săn vé Concert",
      category: "🚀 Mạng xã hội & Sự kiện",
      content: "Tuần trước, nhóm mình đã tham gia cuộc chiến <span class='l2-word' onclick='openWordModal(\"ticket hunting\", \"/ˈtɪk.ɪt ˈhʌn.tɪŋ/\", \"Săn vé\")'>ticket hunting</span> cho concert của thần tượng. Ngay khi mở bán, hàng ngàn người đã <span class='l2-word' onclick='openWordModal(\"access\", \"/ˈæk.ses/\", \"Truy cập\")'>access</span> cùng lúc. Dù rất <span class='l2-word' onclick='openWordModal(\"stressful\", \"/ˈstres.fəl/\", \"Căng thẳng\")'>stressful</span>, tụi mình đã <span class='l2-word' onclick='openWordModal(\"successfully\", \"/səkˈses.fəl.i/\", \"Thành công\")'>successfully</span> đặt được 2 vé.",
      fullTranslation: "Nhóm mình tham gia săn vé hòa nhạc trực tuyến. Lượng truy cập khổng lồ gây căng thẳng nhưng may mắn đã đặt thành công."
    },
    {
      id: "en_i3",
      title: "Bài 3: Phỏng vấn xin việc làm thêm",
      category: "🚀 Kỹ năng nghề nghiệp",
      content: "Hôm nay mình có buổi <span class='l2-word' onclick='openWordModal(\"interview\", \"/ˈɪn.t̬ɚ.vjuː/\", \"Phỏng vấn\")'>interview</span> vị trí nhân viên trợ giảng. Người phỏng vấn nhấn mạnh tầm quan trọng của <span class='l2-word' onclick='openWordModal(\"communication\", \"/kəˌmjuː.nəˈkeɪ.ʃən/\", \"Kỹ năng giao tiếp\")'>communication</span> và thái độ <span class='l2-word' onclick='openWordModal(\"responsible\", \"/rɪˈspɑːn.sə.bəl/\", \"Trách nhiệm\")'>responsible</span> đối với học viên.",
      fullTranslation: "Trong buổi phỏng vấn việc làm thêm, nhà tuyển dụng đánh giá cao khả năng giao tiếp và tinh thần trách nhiệm."
    },
    {
      id: "en_i4",
      title: "Bài 4: Chuẩn bị hồ sơ xin học bổng",
      category: "🚀 Học bổng & Du học",
      content: "Để nộp hồ sơ xin <span class='l2-word' onclick='openWordModal(\"scholarship\", \"/ˈskɑː.lɚ.ʃɪp/\", \"Học bổng\")'>scholarship</span>, bạn cần viết một bài <span class='l2-word' onclick='openWordModal(\"personal statement\", \"/ˈpɝː.sən.əl ˈsteɪt.mənt/\", \"Bài luận cá nhân\")'>personal statement</span> chân thực. Hãy làm nổi bật những đóng góp và <span class='l2-word' onclick='openWordModal(\"achievements\", \"/əˈtʃiːv.mənts/\", \"Thành tích\")'>achievements</span> nổi bật của bản thân.",
      fullTranslation: "Nộp học bổng đòi hỏi bài luận cá nhân sâu sắc, nêu bật thành tích học tập và hoạt động nổi bật."
    },
    {
      id: "en_i5",
      title: "Bài 5: Lên kế hoạch du lịch tự túc",
      category: "🚀 Du lịch & Trải nghiệm",
      content: "We decided to <span class='l2-word' onclick='openWordModal(\"explore\", \"/ɪkˈsplɔːr/\", \"Khám phá\")'>explore</span> Đà Lạt tự túc bằng xe máy. Việc tìm trước <span class='l2-word' onclick='openWordModal(\"accommodation\", \"/əˌkɑː.məˈdeɪ.ʃən/\", \"Chỗ ở\")'>accommodation</span> view đồi và lập lịch trình <span class='l2-word' onclick='openWordModal(\"itinerary\", \"/aɪˈtɪn.ə.rer.i/\", \"Lịch trình chuyến đi\")'>itinerary</span> chi tiết giúp chuyến đi trọn vẹn hơn.",
      fullTranslation: "Tụi mình quyết định khám phá Đà Lạt tự túc. Đặt trước chỗ nghỉ và lên lịch trình chu đáo giúp chuyến đi vui vẻ."
    },
    {
      id: "en_i6",
      title: "Bài 6: Xây dựng thương hiệu cá nhân trên LinkedIn",
      category: "🚀 Nghề nghiệp & Mạng lưới",
      content: "Sinh viên năm cuối nên tối ưu hóa <span class='l2-word' onclick='openWordModal(\"profile\", \"/ˈproʊ.faɪl/\", \"Hồ sơ cá nhân\")'>profile</span> trên LinkedIn. Cập nhật các <span class='l2-word' onclick='openWordModal(\"certificates\", \"/sɚˈtɪf.ə.kəts/\", \"Chứng chỉ\")'>certificates</span> liên quan là chìa khóa để thu hút các nhà tuyển dụng tiềm năng.",
      fullTranslation: "Tối ưu hóa hồ sơ cá nhân và bổ sung chứng chỉ chuyên môn trên LinkedIn giúp sinh viên tiếp cận cơ hội việc làm tốt."
    },
    {
      id: "en_i7",
      title: "Bài 7: Thuyết trình trước đám đông tự tin",
      category: "🚀 Kỹ năng mềm",
      content: "Khi thuyết trình, việc duy trì <span class='l2-word' onclick='openWordModal(\"eye contact\", \"/ˈaɪ ˌkɑːn.tækt/\", \"Giao tiếp bằng mắt\")'>eye contact</span> với khán giả sẽ tăng độ tin cậy. Đừng quên chuẩn bị slide ngắn gọn với <span class='l2-word' onclick='openWordModal(\"visuals\", \"/ˈvɪʒ.u.əlz/\", \"Hình ảnh minh họa\")'>visuals</span> sinh động để bài nói không bị nhàm chán.",
      fullTranslation: "Giao tiếp bằng mắt và dùng slide trực quan là phương pháp giúp bài thuyết trình tự tin và thu hút hơn."
    },
    {
      id: "en_i8",
      title: "Bài 8: Trải nghiệm thực tập sinh tuần đầu tiên",
      category: "🚀 Môi trường công sở",
      content: "Tuần đầu đi làm thực tập, mình phải làm quen với <span class='l2-word' onclick='openWordModal(\"company culture\", \"/ˈkʌm.pə.ni ˈkʌl.tʃɚ/\", \"Văn hóa công ty\")'>company culture</span> mới. Luôn chủ động xin <span class='l2-word' onclick='openWordModal(\"feedback\", \"/ˈfiːd.bæk/\", \"Phản hồi góp ý\")'>feedback</span> từ quản lý để nhanh chóng sửa lỗi và tiến bộ.",
      fullTranslation: "Tuần đầu thực tập cần chủ động thích nghi văn hóa doanh nghiệp và đón nhận phản hồi đóng góp để hoàn thiện."
    },
    {
      id: "en_i9",
      title: "Bài 9: Học cách giải quyết bất đồng trong nhóm",
      category: "🚀 Kỹ năng làm việc nhóm",
      content: "Trong thảo luận đồ án, những xung đột quan điểm là điều khó tránh. Thay vì tranh cãi, cả nhóm nên tìm điểm chung để đạt được <span class='l2-word' onclick='openWordModal(\"compromise\", \"/ˈkɑːm.prə.maɪz/\", \"Sự thỏa hiệp / Thống nhất\")'>compromise</span> hợp lý nhất cho đề tài.",
      fullTranslation: "Bất đồng ý kiến trong nhóm là tự nhiên; quan trọng là biết lắng nghe và tìm điểm thỏa hiệp vì mục tiêu chung."
    },
    {
      id: "en_i10",
      title: "Bài 10: Tạo thói quen đọc tin tức mỗi sáng",
      category: "🚀 Phát triển bản thân",
      content: "Mỗi sáng mình dành 15 phút cập nhật tin tức qua các bản tin <span class='l2-word' onclick='openWordModal(\"newsletter\", \"/ˈnuːzˌlet̬.ɚ/\", \"Bản tin email định kỳ\")'>newsletter</span>. Việc nắm bắt các sự kiện thời sự <span class='l2-word' onclick='openWordModal(\"current affairs\", \"/ˌkɝː.ənt əˈferz/\", \"Thời sự / Tin tức xã hội\")'>current affairs</span> giúp mình mở mang tư duy phản biện.",
      fullTranslation: "Đọc bản tin buổi sáng giúp cập nhật thời sự thế giới và hình thành tư duy góc nhìn đa chiều."
    }
  ],

  // =========================================================================
  // 🔥 LEVEL 3: THÁCH THỨC (80% L2 Code-Switching) - 10 BÀI
  // =========================================================================
  advanced: [
    {
      id: "en_a1",
      title: "Bài 1: Thảo luận về Công nghệ AI",
      category: "🔥 Công nghệ & Đổi mới",
      content: "<span class='l2-word' onclick='openWordModal(\"Artificial intelligence\", \"/ˌɑːr.t̬ə.fɪʃ.əl ɪnˈtel.ə.dʒəns/\", \"Trí tuệ nhân tạo\")'>Artificial intelligence</span> is transforming how we learn languages efficiently. It provides <span class='l2-word' onclick='openWordModal(\"personalized\", \"/ˈpɝː.sən.əl.aɪzd/\", \"Cá nhân hóa\")'>personalized</span> feedback and creates <span class='l2-word' onclick='openWordModal(\"interactive\", \"/ˌɪn.t̬ɚˈæk.tɪv/\", \"Tương tác\")'>interactive</span> learning environments cho sinh viên toàn cầu.",
      fullTranslation: "Trí tuệ nhân tạo đang đổi mới giáo dục ngôn ngữ qua phản hồi cá nhân hóa và không gian tương tác."
    },
    {
      id: "en_a2",
      title: "Bài 2: Sức ảnh hưởng của Viral Trends",
      category: "🔥 Mạng xã hội & Xu hướng",
      content: "Short-form video platforms like TikTok easily produce <span class='l2-word' onclick='openWordModal(\"viral trends\", \"/ˈvaɪ.rəl trendz/\", \"Xu hướng lan truyền\")'>viral trends</span> overnight. However, constant exposure to social media creates <span class='l2-word' onclick='openWordModal(\"peer pressure\", \"/pɪr ˈpreʃ.ɚ/\", \"Áp lực đồng lứa\")'>peer pressure</span>. Cultivating <span class='l2-word' onclick='openWordModal(\"critical thinking\", \"/ˌkrɪt̬.ɪ.kəl ˈθɪŋ.kɪŋ/\", \"Tư duy phản biện\")'>critical thinking</span> helps us navigate digital noise responsibly.",
      fullTranslation: "Video ngắn tạo ra xu hướng tức thì nhưng dễ gây áp lực đồng lứa nếu thiếu tư duy phản biện khi tiếp nhận."
    },
    {
      id: "en_a3",
      title: "Bài 3: Tư duy bền vững và Tiêu dùng xanh",
      category: "🔥 Môi trường & Bền vững",
      content: "Adopting an <span class='l2-word' onclick='openWordModal(\"eco-friendly\", \"/ˈiː.koʊˌfrend.li/\", \"Thân thiện môi trường\")'>eco-friendly</span> lifestyle is no longer an option but a necessity. Young consumers actively support brands with strict <span class='l2-word' onclick='openWordModal(\"sustainability\", \"/səˌsteɪ.nəˈbɪl.ə.t̬i/\", \"Tính bền vững\")'>sustainability</span> commitments to combat climate change.",
      fullTranslation: "Tiêu dùng xanh và thân thiện với môi trường là xu hướng tất yếu của giới trẻ nhằm ứng phó biến đổi khí hậu."
    },
    {
      id: "en_a4",
      title: "Bài 4: Hội chứng Burnout trong môi trường học tập",
      category: "🔥 Tâm lý & Sức khỏe",
      content: "Chronic stress combined with heavy workloads triggers <span class='l2-word' onclick='openWordModal(\"burnout\", \"/ˈbɝːn.aʊt/\", \"Kiệt sức / Quá tải\")'>burnout</span> among college students. Establishing clear boundaries between study and leisure is crucial for <span class='l2-word' onclick='openWordModal(\"mental well-being\", \"/ˈmen.təl ˌwelˈbiː.ɪŋ/\", \"Sức khỏe tinh thần\")'>mental well-being</span>.",
      fullTranslation: "Áp lực học tập kéo dài dễ dẫn đến kiệt sức. Cần phân định ranh giới nghỉ ngơi để bảo vệ sức khỏe tâm thần."
    },
    {
      id: "en_a5",
      title: "Bài 5: Tác động của Làm việc từ xa (Remote Work)",
      category: "🔥 Xu hướng việc làm",
      content: "The rise of <span class='l2-word' onclick='openWordModal(\"remote work\", \"/rɪˈmoʊt wɝːk/\", \"Làm việc từ xa\")'>remote work</span> offers incredible flexibility, yet requires immense self-discipline. Professionals must refine their <span class='l2-word' onclick='openWordModal(\"autonomous\", \"/ɑːˈtɑː.nə.məs/\", \"Tự chủ / Tự giác\")'>autonomous</span> working skills to maintain productivity.",
      fullTranslation: "Làm việc từ xa đem lại sự tự do linh hoạt nhưng đòi hỏi năng lực tự chủ cao để giữ vững năng suất."
    },
    {
      id: "en_a6",
      title: "Bài 6: Khởi nghiệp thời đại số hóa",
      category: "🔥 Khởi nghiệp & Đổi mới",
      content: "Launching a tech <span class='l2-word' onclick='openWordModal(\"startup\", \"/ˈstɑːrt.ʌp/\", \"Doanh nghiệp khởi nghiệp\")'>startup</span> requires more than just innovative concepts. Founders must validate their <span class='l2-word' onclick='openWordModal(\"business model\", \"/ˈbɪz.nɪs ˌmɑː.dəl/\", \"Mô hình kinh doanh\")'>business model</span> early to ensure sustainable market fit.",
      fullTranslation: "Khởi nghiệp công nghệ cần nhanh chóng kiểm chứng mô hình kinh doanh trên thị trường thực tế thay vì chỉ dựa vào ý tưởng."
    },
    {
      id: "en_a7",
      title: "Bài 7: Vấn đề Bảo mật Dữ liệu cá nhân",
      category: "🔥 Không gian mạng & Quyền riêng tư",
      content: "With increasing cyber threats, understanding <span class='l2-word' onclick='openWordModal(\"data privacy\", \"/ˈdeɪ.t̬ə ˈpraɪ.və.si/\", \"Bảo mật dữ liệu riêng tư\")'>data privacy</span> regulations is paramount. Users should implement multi-factor <span class='l2-word' onclick='openWordModal(\"authentication\", \"/ɑːˌθen.t̬əˈkeɪ.ʃən/\", \"Xác thực bảo mật\")'>authentication</span> to protect accounts.",
      fullTranslation: "Ý thức về bảo mật dữ liệu riêng tư và kích hoạt xác thực hai lớp là giải pháp hàng đầu phòng ngừa rủi ro mạng."
    },
    {
      id: "en_a8",
      title: "Bài 8: Trí tuệ cảm xúc trong vai trò Lãnh đạo",
      category: "🔥 Kỹ năng lãnh đạo",
      content: "High <span class='l2-word' onclick='openWordModal(\"emotional intelligence\", \"/ɪˈmoʊ.ʃən.əl ɪnˈtel.ə.dʒəns/\", \"Trí tuệ cảm xúc (EQ)\")'>emotional intelligence</span> distinguishes outstanding leaders from ordinary managers. Demonstrating genuine <span class='l2-word' onclick='openWordModal(\"empathy\", \"/ˈem.pə.θi/\", \"Sự thấu cảm\")'>empathy</span> inspires teams toward higher collaborative success.",
      fullTranslation: "Trí tuệ cảm xúc và sự thấu cảm chân thành là phẩm chất cốt lõi tạo nên những người lãnh đạo truyền cảm hứng."
    },
    {
      id: "en_a9",
      title: "Bài 9: Sự phát triển của Kinh tế Chia sẻ",
      category: "🔥 Kinh tế hiện đại",
      content: "The <span class='l2-word' onclick='openWordModal(\"sharing economy\", \"/ˈʃer.ɪŋ iˈkɑː.nə.mi/\", \"Nền kinh tế chia sẻ\")'>sharing economy</span> has revolutionized transportation and hospitality worldwide. Peer-to-peer platforms maximize resource utilization while lowering <span class='l2-word' onclick='openWordModal(\"overhead costs\", \"/ˈoʊ.vɚ.hed kɑːsts/\", \"Chi phí vận hành cố định\")'>overhead costs</span>.",
      fullTranslation: "Kinh tế chia sẻ tối ưu hóa việc phân bổ tài nguyên và cắt giảm chi phí trung gian trong giao thông, du lịch."
    },
    {
      id: "en_a10",
      title: "Bài 10: Tầm quan trọng của Học tập suốt đời",
      category: "🔥 Phát triển cá nhân",
      content: "In a rapidly evolving workplace, committing to <span class='l2-word' onclick='openWordModal(\"lifelong learning\", \"/ˈlaɪf.lɑːŋ ˈlɝː.nɪŋ/\", \"Học tập suốt đời\")'>lifelong learning</span> guarantees professional resilience. Continuously acquiring new <span class='l2-word' onclick='openWordModal(\"competencies\", \"/ˈkɑːm.pə.t̬ən.siz/\", \"Năng lực / Kỹ năng chuyên môn\")'>competencies</span> prevents career obsolescence.",
      fullTranslation: "Tinh thần học tập suốt đời và liên tục làm mới năng lực là chìa khóa duy trì lợi thế nghề nghiệp bền vững."
    }
  ]
};