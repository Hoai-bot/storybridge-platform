/**
 * StoryBridge Content Library
 * Data structure for translanguaging stories across multiple difficulty levels & target languages.
 */

const storyLibrary = {
  // =========================================================================
  // TARGET LANGUAGE: ENGLISH (en)
  // =========================================================================
  en: {
    // LEVEL 1: 🌱 Nhập môn (20% L2 - Basic Code-Switching)
    beginner: [
      {
        id: "en_b1",
        title: "Bài 1: Buổi sáng ở Trường Đại học",
        category: "Đời sống sinh viên",
        content: "Mỗi buổi sáng, tôi đến <span class='l2-word' onclick='openWordModal(\"campus\", \"/ˈkæm.pəs/\", \"Khuôn viên trường\", \"Buổi sáng tôi bước vào campus.\")'>campus</span> với tinh thần tươi mới. Hôm nay lớp tôi có một buổi <span class='l2-word' onclick='openWordModal(\"presentation\", \"/ˌprez.enˈteɪ.ʃən/\", \"Bài thuyết trình\", \"Hôm nay lớp có buổi presentation.\")'>presentation</span> quan trọng về ngành Marketing. Tôi và các bạn trong <span class='l2-word' onclick='openWordModal(\"team\", \"/tiːm/\", \"Nhóm học tập\", \"Các bạn trong team cùng cố gắng.\")'>team</span> đã chuẩn bị suốt tuần qua. Dù có chút <span class='l2-word' onclick='openWordModal(\"nervous\", \"/ˈnɝː.vəs/\", \"Lo lắng / Hồi hộp\", \"Dù có chút nervous nhưng tự tin.\")'>nervous</span>, nhưng mọi người đều rất nỗ lực.",
        fullTranslation: "Buổi sáng, tôi bước vào khuôn viên trường đại học với tâm trạng tràn đầy năng lượng. Hôm nay lớp tôi có một bài thuyết trình quan trọng. Nhóm chúng tôi đã chuẩn bị cả tuần qua."
      },
      {
        id: "en_b2",
        title: "Bài 2: Đi cà phê làm bài tập nhóm",
        category: "Giao tiếp hàng ngày",
        content: "Cuối tuần, nhóm mình hẹn gặp ở <span class='l2-word' onclick='openWordModal(\"coffee shop\", \"/ˈkɑː.fi ʃɑːp/\", \"Quán cà phê\", \"Hẹn gặp ở coffee shop gần trường.\")'>coffee shop</span> gần trường để giải quyết đống <span class='l2-word' onclick='openWordModal(\"homework\", \"/ˈhoʊm.wɝːk/\", \"Bài tập về nhà\", \"Giải quyết đống homework.\")'>homework</span> tồn đọng. Không gian ở đây rất <span class='l2-word' onclick='openWordModal(\"quiet\", \"/ˈkwaɪ.ət/\", \"Yên tĩnh\", \"Không gian rất quiet.\")'>quiet</span> và có Wifi nhanh, giúp cả nhóm <span class='l2-word' onclick='openWordModal(\"focus\", \"/ˈfoʊ.kəs/\", \"Tập trung\", \"Giúp cả nhóm focus làm bài.\")'>focus</span> làm việc hiệu quả hơn hẳn.",
        fullTranslation: "Cuối tuần, nhóm mình hẹn gặp ở quán cà phê gần trường để giải quyết đống bài tập tồn đọng. Không gian ở đây rất yên tĩnh và có Wifi nhanh, giúp cả nhóm tập trung làm việc hiệu quả hơn hẳn."
      },
      {
        id: "en_b3",
        title: "Bài 3: Đăng ký câu lạc bộ kỹ năng",
        category: "Hoạt động ngoại khóa",
        content: "Trường mình mới mở một <span class='l2-word' onclick='openWordModal(\"club\", \"/klʌb/\", \"Câu lạc bộ\", \"Mở một club Tiếng Anh.\")'>club</span> kỹ năng mềm rất hay. Mình quyết định đăng ký làm <span class='l2-word' onclick='openWordModal(\"member\", \"/ˈmem.bɚ/\", \"Thành viên\", \"Trở thành member chính thức.\")'>member</span> chính thức để mở rộng <span class='l2-word' onclick='openWordModal(\"network\", \"/ˈnet.wɝːk/\", \"Mạng lưới quan hệ\", \"Mở rộng network bạn bè.\")'>network</span> và rèn luyện sự tự tin khi nói chuyện trước <span class='l2-word' onclick='openWordModal(\"crowd\", \"/kraʊd/\", \"Đám đông\", \"Nói chuyện trước crowd.\")'>crowd</span>.",
        fullTranslation: "Trường mình mới mở một câu lạc bộ kỹ năng mềm rất hay. Mình quyết định đăng ký làm thành viên chính thức để mở rộng mối quan hệ và rèn luyện sự tự tin khi nói chuyện trước đám đông."
      },
      {
        id: "en_b4",
        title: "Bài 4: Bữa tối đơn giản tại ký túc xá",
        category: "Đời sống hàng ngày",
        content: "Sau giờ học, mình cùng bạn chung phòng đi <span class='l2-word' onclick='openWordModal(\"supermarket\", \"/ˈsuː.pɚˌmɑːr.kɪt/\", \"Siêu thị\", \"Đi supermarket mua đồ.\")'>supermarket</span> mua thực phẩm. Chúng mình tự nấu một bữa <span class='l2-word' onclick='openWordModal(\"dinner\", \"/ˈdɪn.ɚ/\", \"Bữa tối\", \"Nấu bữa dinner ấm cúng.\")'>dinner</span> đơn giản nhưng rất ngon miệng. Ăn xong, cả hai cùng xem một bộ phim <span class='l2-word' onclick='openWordModal(\"comedy\", \"/ˈkɑː.mə.di/\", \"Phim hài\", \"Xem bộ phim comedy giải trí.\")'>comedy</span> nhẹ nhàng để thư giãn.",
        fullTranslation: "Sau giờ học, mình cùng bạn chung phòng đi siêu thị mua thực phẩm. Chúng mình tự nấu một bữa tối đơn giản nhưng rất ngon miệng. Ăn xong, cả hai cùng xem một bộ phim hài nhẹ nhàng để thư giãn."
      }
    ],

    // LEVEL 2: 🚀 Tự tin (50% L2 - Balanced Code-Switching)
    intermediate: [
      {
        id: "en_i1",
        title: "Bài 1: Kế hoạch làm đồ án môn học",
        category: "Học tập & Đồ án",
        content: "Our <span class='l2-word' onclick='openWordModal(\"team\", \"/tiːm/\", \"Nhóm\", \"Our team needs to complete.\")'>team</span> cần <span class='l2-word' onclick='openWordModal(\"complete\", \"/kəmˈpliːt/\", \"Hoàn thành\", \"Complete this project.\")'>complete</span> dự án này trước <span class='l2-word' onclick='openWordModal(\"deadline\", \"/ˈded.laɪn/\", \"Hạn chót\", \"Before next week deadline.\")'>deadline</span> tuần sau. Trưởng nhóm đã <span class='l2-word' onclick='openWordModal(\"assign\", \"/əˈsaɪn/\", \"Phân công\", \"Assign tasks to everyone.\")'>assign</span> công việc cụ thể cho từng thành viên. Mình chịu trách nhiệm <span class='l2-word' onclick='openWordModal(\"research\", \"/ˈriː.sɝːtʃ/\", \"Nghiên cứu\", \"Research secondary data.\")'>research</span> tài liệu và viết báo cáo tổng hợp.",
        fullTranslation: "Nhóm chúng tôi cần hoàn thành dự án này trước hạn chót tuần sau. Trưởng nhóm đã phân công công việc cụ thể cho từng thành viên. Tôi chịu trách nhiệm nghiên cứu tài liệu và viết báo cáo tổng hợp."
      },
      {
        id: "en_i2",
        title: "Bài 2: Chuẩn bị cho chuyến đi du lịch",
        category: "Kế hoạch & Du lịch",
        content: "We should <span class='l2-word' onclick='openWordModal(\"book\", \"/bʊk/\", \"Đặt chỗ / Đặt vé\", \"Book flight tickets early.\")'>book</span> the flight tickets early để nhận được giá ưu đãi. Ngoài ra, việc <span class='l2-word' onclick='openWordModal(\"search\", \"/sɝːtʃ/\", \"Tìm kiếm\", \"Search for local hotels.\")'>search</span> khách sạn chất lượng tốt ở trung tâm thành phố cũng rất <span class='l2-word' onclick='openWordModal(\"important\", \"/ɪmˈpɔːr.tənt/\", \"Quan trọng\", \"Is very important.\")'>important</span> cho chuyến đi hoàn hảo.",
        fullTranslation: "Chúng ta nên đặt vé máy bay sớm để có giá tốt. Ngoài ra, việc tìm kiếm khách sạn chất lượng tốt ở trung tâm thành phố cũng rất quan trọng cho chuyến đi hoàn hảo."
      },
      {
        id: "en_i3",
        title: "Bài 3: Phỏng vấn xin việc làm thêm",
        category: "Kỹ năng nghề nghiệp",
        content: "Hôm nay mình có buổi <span class='l2-word' onclick='openWordModal(\"interview\", \"/ˈɪn.t̬ɚ.vjuː/\", \"Buổi phỏng vấn\", \"An interview for part-time job.\")'>interview</span> vị trí nhân viên bán thời gian. Nhà tuyển dụng yêu cầu ứng viên thể hiện <span class='l2-word' onclick='openWordModal(\"communication\", \"/kəˌmjuː.nəˈkeɪ.ʃən/\", \"Giao tiếp\", \"Good communication skills.\")'>communication</span> skill tốt và tinh thần <span class='l2-word' onclick='openWordModal(\"responsible\", \"/rɪˈspɑːn.sə.bəl/\", \"Trách nhiệm\", \"Highly responsible attitude.\")'>responsible</span> cao đối với công việc.",
        fullTranslation: "Hôm nay mình có buổi phỏng vấn vị trí nhân viên bán thời gian. Nhà tuyển dụng yêu cầu ứng viên thể hiện kỹ năng giao tiếp tốt và tinh thần trách nhiệm cao đối với công việc."
      }
    ],

    // LEVEL 3: 🔥 Thách thức (80% L2 - Immersion Code-Switching)
    advanced: [
      {
        id: "en_a1",
        title: "Bài 1: Thảo luận về Công nghệ Trí tuệ Nhân tạo",
        category: "Chuyên ngành & Công nghệ",
        content: "<span class='l2-word' onclick='openWordModal(\"Artificial intelligence\", \"/ˌɑːr.t̬ə.fɪʃ.əl ɪnˈtel.ə.dʒəns/\", \"Trí tuệ nhân tạo\", \"AI is transforming education.\")'>Artificial intelligence</span> is transforming how we learn languages efficiently. It provides <span class='l2-word' onclick='openWordModal(\"personalized\", \"/ˈpɝː.sən.əl.aɪzd/\", \"Cá nhân hóa\", \"Personalized feedback.\")'>personalized</span> feedback and creates <span class='l2-word' onclick='openWordModal(\"interactive\", \"/ˌɪn.t̬ɚˈæk.tɪv/\", \"Tương tác\", \"Interactive environments.\")'>interactive</span> learning environments cho sinh viên toàn cầu.",
        fullTranslation: "Trí tuệ nhân tạo đang thay đổi cách chúng ta học ngôn ngữ một cách hiệu quả. Nó cung cấp phản hồi mang tính cá nhân hóa và tạo ra môi trường học tập tương tác cho sinh viên toàn cầu."
      },
      {
        id: "en_a2",
        title: "Bài 2: Quản lý thời gian và Áp lực học tập",
        category: "Tâm lý & Kỹ năng sống",
        content: "Effective <span class='l2-word' onclick='openWordModal(\"time management\", \"/taɪm ˈmæn.ədʒ.mənt/\", \"Quản lý thời gian\", \"Mastering time management.\")'>time management</span> helps students reduce <span class='l2-word' onclick='openWordModal(\"academic pressure\", \"/ˌæk.əˈdem.ɪk ˈpreʃ.ɚ/\", \"Áp lực học tập\", \"Reduce academic pressure.\")'>academic pressure</span> significantly. Prioritizing urgent tasks and maintaining a balanced <span class='l2-word' onclick='openWordModal(\"lifestyle\", \"/ˈlaɪf.staɪl/\", \"Lối sống\", \"Healthy lifestyle.\")'>lifestyle</span> sẽ mang lại thành công lâu dài.",
        fullTranslation: "Quản lý thời gian hiệu quả giúp sinh viên giảm áp lực học tập đáng kể. Việc sắp xếp thứ tự ưu tiên cho công việc gấp và duy trì lối sống cân bằng sẽ mang lại thành công lâu dài."
      }
    ]
  },

  // =========================================================================
  // TARGET LANGUAGE: KOREAN (ko)
  // =========================================================================
  ko: {
    beginner: [
      {
        id: "ko_b1",
        title: "Bài 1: Giao lưu bạn bè tại Đại học Seoul",
        category: "Đời sống sinh viên",
        content: "Hôm nay mình cùng <span class='l2-word' onclick='openWordModal(\"친구\", \"[Chin-gu]\", \"Bạn bè\", \"Cùng 친구 đi dạo.\")'>친구</span> ghé thăm trường <span class='l2-word' onclick='openWordModal(\"대학교\", \"[Dae-hak-gyo]\", \"Trường Đại học\", \"Đến 대학교 tham quan.\")'>대학교</span>. Thời tiết hôm nay rất <span class='l2-word' onclick='openWordModal(\"좋아요\", \"[Cho-a-yo]\", \"Rất tốt / Đẹp\", \"Thời tiết 좋아요.\")'>좋아요</span>, thích hợp để chụp ảnh.",
        fullTranslation: "Hôm nay tôi cùng bạn bè đến thăm trường đại học. Thời tiết hôm nay thật tuyệt vời, rất thích hợp để chụp ảnh."
      },
      {
        id: "ko_b2",
        title: "Bài 2: Thưởng thức món ăn đường phố",
        category: "Ẩm thực & Văn hóa",
        content: "Buổi tối, chúng mình cùng đi ăn <span class='l2-word' onclick='openWordModal(\"떡볶이\", \"[Tteok-bok-ki]\", \"Bánh gạo cay\", \"Ăn món 떡볶이 ngon tuyệt.\")'>떡볶이</span> ở chợ đêm. Món ăn hơi cay một chút nhưng vô cùng <span class='l2-word' onclick='openWordModal(\"맛있어요\", \"[Mas-it-seo-yo]\", \"Rất ngon\", \"Rất 맛있어요!\")'>맛있어요</span>!",
        fullTranslation: "Buổi tối, chúng mình cùng đi ăn bánh gạo cay ở chợ đêm. Món ăn hơi cay một chút nhưng vô cùng ngon miệng!"
      }
    ],
    intermediate: [
      {
        id: "ko_i1",
        title: "Bài 1: Cuộc sống du học sinh tại Hàn Quốc",
        category: "Du học & Trải nghiệm",
        content: "<span class='l2-word' onclick='openWordModal(\"한국\", \"[Han-guk]\", \"Hàn Quốc\", \"Khi mới đến 한국.\")'>한국</span>에서의 삶은 ban đầu có chút bỡ ngỡ, nhưng nhờ có các bạn cùng lớp tận tình hỗ trợ, mình đã cảm thấy <span class='l2-word' onclick='openWordModal(\"행복해요\", \"[Haeng-bok-hae-yo]\", \"Hạnh phúc\", \"Cảm thấy hạnh phúc.\")'>행복해요</span> và tự tin hơn mỗi ngày.",
        fullTranslation: "Cuộc sống tại Hàn Quốc ban đầu có chút bỡ ngỡ, nhưng nhờ có các bạn cùng lớp tận tình hỗ trợ, tôi cảm thấy rất hạnh phúc và tự tin hơn mỗi ngày."
      }
    ],
    advanced: [
      {
        id: "ko_a1",
        title: "Bài 1: Văn hóa làm việc và học tập",
        category: "Xã hội & Văn hóa",
        content: "한국의 <span class='l2-word' onclick='openWordModal(\"문화\", \"[Mun-hwa]\", \"Văn hóa\", \"Văn hóa học tập.\")'>문화</span>는 rất coi trọng sự chăm chỉ và đúng giờ. Vì vậy, việc quản lý thời gian khi học tập là vô cùng quan trọng.",
        fullTranslation: "Văn hóa của Hàn Quốc rất coi trọng sự chăm chỉ và đúng giờ. Vì vậy, việc quản lý thời gian khi học tập là vô cùng quan trọng."
      }
    ]
  }
};