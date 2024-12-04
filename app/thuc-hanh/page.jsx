import Link from "next/link";
export default function Practice() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Làm nổi bật hơn */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          COMING SOON          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-xl">Nếu muốn không bị đau bệnh ung thư tai nạn chết sớm và trường sinh bất tử, thì chỉ có một con đường để đi là học, y học vũ trụ trước BigBang mà thôi </p>
        </div>

        {/* Main Content - Grid Layout với hiệu ứng nổi bật */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Phương pháp 1: Bệnh Lý */}
          <section className="group bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm 
            border border-blue-700/30 rounded-2xl p-6 
            hover:border-blue-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] 
            flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
              1. Giải Pháp Cho Bệnh Lý
            </h2>
            <div className="space-y-4 text-gray-300 flex-grow">
              <p className="font-medium text-blue-200">Phát triển hệ thống phòng ngừa và điều trị:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 group-hover:text-blue-100 transition-colors">
                <li>AI dự đoán và phát hiện sớm bệnh</li>
                <li>Nano-robot tuần tra trong cơ thể</li>
                <li>Hệ thống tự động điều chỉnh miễn dịch</li>
              </ul>
              <div className="text-sm text-blue-400 mt-4 pt-4 border-t border-blue-900/50">
                Trạng thái: Đang phát triển công nghệ nano và AI
              </div>
            </div>
          </section>

          {/* Phương pháp 2: Tai nạn */}
          <section className="group bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm 
            border border-purple-700/30 rounded-2xl p-6 
            hover:border-purple-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)] 
            flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
              2. Hệ Thống Cảnh Báo Tai Nạn
            </h2>
            <div className="space-y-4 text-gray-300 flex-grow">
              <p className="font-medium text-purple-200">Hệ thống bảo vệ toàn diện:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 group-hover:text-purple-100 transition-colors">
                <li>Lớp bảo vệ nano thông minh</li>
                <li>Hệ thống phản ứng nhanh với chấn thương</li>
                <li>Công nghệ tái tạo mô và cơ quan</li>
              </ul>
              <div className="text-sm text-purple-400 mt-4 pt-4 border-t border-purple-900/50">
                Trạng thái: Nghiên cứu vật liệu mới
              </div>
            </div>
          </section>

          {/* Phương pháp 3: Môi trường */}
          <section className="group bg-gradient-to-br from-pink-900/50 to-red-900/50 backdrop-blur-sm 
            border border-pink-700/30 rounded-2xl p-6 
            hover:border-pink-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)] 
            flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4 text-pink-400 group-hover:text-pink-300 transition-colors">
              3. Thích Nghi Thiên Tai
            </h2>
            <div className="space-y-4 text-gray-300 flex-grow">
              <p className="font-medium text-pink-200">Tăng cường khả năng thích nghi:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 group-hover:text-pink-100 transition-colors">
                <li>Hệ thống điều chỉnh thân nhiệt thông minh</li>
                <li>Tăng cường khả năng chống phóng xạ</li>
                <li>Vệ tinh không gian điều tiết ánh sáng, nhiệt độ và giảm động đất, sóng thần</li>
              </ul>
              <div className="text-sm text-pink-400 mt-4 pt-4 border-t border-pink-900/50">
                Trạng thái: Thử nghiệm công nghệ sinh học mới
              </div>
            </div>
          </section>

          {/* Phương pháp 4: Stress */}
          <section className="group bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm 
            border border-red-700/30 rounded-2xl p-6 
            hover:border-red-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)] 
            flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4 text-red-400 group-hover:text-red-300 transition-colors">
              4. Kiểm Soát Stress
            </h2>
            <div className="space-y-4 text-gray-300 flex-grow">
              <p className="font-medium text-red-200">Quản lý tâm lý toàn diện:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 group-hover:text-red-100 transition-colors">
                <li>AI phân tích và điều chỉnh cảm xúc</li>
                <li>Hệ thống cân bằng thần kinh tự động</li>
                <li>Công nghệ tối ưu hóa giấc ngủ</li>
              </ul>
              <div className="text-sm text-red-400 mt-4 pt-4 border-t border-red-900/50">
                Trạng thái: Phát triển thuật toán AI
              </div>
            </div>
          </section>

          {/* Phương pháp 5: Gen */}
          <section className="group bg-gradient-to-br from-orange-900/50 to-yellow-900/50 backdrop-blur-sm 
            border border-orange-700/30 rounded-2xl p-6 
            hover:border-orange-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] 
            flex flex-col h-full md:col-span-2 xl:col-span-1">
            <h2 className="text-xl font-semibold mb-4 text-orange-400 group-hover:text-orange-300 transition-colors">
              5. Tối Ưu Hóa Gen
            </h2>
            <div className="space-y-4 text-gray-300 flex-grow">
              <p className="font-medium text-orange-200">Công nghệ chỉnh sửa gen:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 group-hover:text-orange-100 transition-colors">
                <li>Sửa chữa các đột biến gen có hại</li>
                <li>Tăng cường khả năng tự phục hồi</li>
                <li>Tối ưu hóa quá trình lão hóa</li>
              </ul>
              <div className="text-sm text-orange-400 mt-4 pt-4 border-t border-orange-900/50">
                Trạng thái: Nghiên cứu công nghệ gen mới
              </div>
            </div>
          </section>
        </div>

        {/* Footer note */}
       
      </div>
    </div>
  );
}