'use client';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 sm:py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Giới Thiệu Về Nhóm Chúng Tôi
      </h1>
      
      <div className="space-y-8">
        {/* Giới thiệu */}
        <section className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-700 leading-relaxed">
            Dù không có cơ hội học đại học chính quy, nhóm chúng tôi đã dành hơn 40 năm tự học và nghiên cứu trên chính cơ thể mình 
            cũng như những người thân yêu, nhằm tìm ra giải pháp toàn diện cho năm vấn đề lớn nhất của nhân loại. 
            Đây không chỉ là những trở ngại đối với việc kéo dài tuổi thọ mà còn là thách thức đe dọa đến sự tồn tại bền vững của con người.
          </p>
        </section>

        {/* Quan điểm */}
        <section className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Quan Điểm Về Kéo Dài Tuổi Thọ Và Sự Bất Tử</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kéo dài tuổi thọ – thậm chí chạm đến bất tử – không chỉ đơn giản là chữa khỏi bệnh tật. 
            Dù con người có thể sống khỏe mạnh và trẻ trung đến 400 tuổi, vẫn tồn tại những mối nguy hiểm đe dọa:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Thảm họa nhân tạo: Tai nạn giao thông, sự cố kỹ thuật, hoặc nguy cơ từ vũ khí hủy diệt.</li>
            <li>Thảm họa thiên nhiên: Động đất, sóng thần, và những hiện tượng khí hậu khắc nghiệt có thể xóa sổ mọi thành tựu.</li>
            <li>Yếu tố tâm lý: Trầm cảm, cô đơn, hay áp lực xã hội khiến việc sống lâu trở nên vô nghĩa.</li>
            <li>Di truyền học: Các bệnh lý gen tiềm ẩn có thể kéo dài và ảnh hưởng qua nhiều thế hệ.</li>
          </ul>
        </section>

        {/* Phương pháp */}
        <section className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Phương Pháp Tiếp Cận Của Chúng Tôi</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Trong hơn một thập kỷ miệt mài nghiên cứu, nhóm chúng tôi đã phát triển một giải pháp toàn diện, 
            dựa trên nguồn năng lượng cơ bản nhất của Trái Đất – ánh sáng mặt trời.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "1. Vấn Đề Sức Khỏe",
                content: "Ánh sáng mặt trời hỗ trợ phục hồi tế bào, loại bỏ các căn bệnh nguy hiểm như ung thư, tim mạch, và tiểu đường."
              },
              {
                title: "2. Tai Nạn Và Chấn Thương",
                content: "Chúng tôi nghiên cứu cách ánh sáng mặt trời có thể tăng cường phản xạ và tập trung, giúp giảm thiểu tai nạn."
              },
              {
                title: "3. Môi Trường Và Thiên Nhiên",
                content: "Ánh sáng mặt trời là nguồn năng lượng bền vững nhất, có khả năng giảm thiểu ô nhiễm và phục hồi hệ sinh thái."
              },
              {
                title: "4. Yếu Tố Tâm Lý Và Xã Hội",
                content: "Ánh sáng mặt trời không chỉ mang lại sức khỏe vật lý mà còn cải thiện tinh thần, giúp giảm trầm cảm."
              },
              {
                title: "5. Gen Và Di Truyền",
                content: "Chúng tôi đang phát triển các phương pháp tận dụng ánh sáng mặt trời để tối ưu hóa di truyền."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tầm nhìn */}
        <section className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Tầm Nhìn Về Sự Bất Tử</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bất tử không chỉ là sống mãi – đó là khả năng sống tự do, an toàn, và không bị giới hạn. 
            Nhóm chúng tôi tin rằng ánh sáng mặt trời chính là chìa khóa để:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Loại bỏ rào cản về sức khỏe, tai nạn và thiên tai.</li>
            <li>Nâng cao sức khỏe tinh thần lẫn thể chất.</li>
            <li>Kiến tạo một thế giới nơi con người không chỉ sống lâu mà còn sống trọn vẹn ý nghĩa.</li>
          </ul>
        </section>

        {/* Kết nối */}
        <section className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Hãy Cùng Kết Nối</h2>
          <p className="text-gray-700 leading-relaxed">
            Nếu bạn cùng chia sẻ tầm nhìn và đam mê này, nhóm chúng tôi rất mong được hợp tác và trao đổi 
            để biến những mục tiêu lớn lao này thành hiện thực. Hãy cùng nhau xây dựng một tương lai bền vững và không giới hạn!
          </p>
        </section>
      </div>
    </div>
  );
} 