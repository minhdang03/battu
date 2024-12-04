export default function Theory() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            COMING SOON
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg">TRANG LÝ THUYẾT ĐANG ĐƯỢC PHÁT TRIỂN
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bệnh lý */}
          <section className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm 
            border border-purple-700/30 rounded-2xl p-6 
            hover:border-purple-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">1. Bệnh Lý</h2>
            <div className="space-y-4">
              <div className="bg-purple-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Ung Thư</h3>
                <p className="text-gray-300">Theo NCI, khoảng 1/3 trường hợp tử vong mỗi năm do các loại ung thư gây ra.</p>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Bệnh Tim Mạch</h3>
                <p className="text-gray-300">Nghiên cứu từ Harvard và Johns Hopkins cho thấy bệnh tim mạch là nguyên nhân tử vong hàng đầu.</p>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Bệnh Đường Hô Hấp</h3>
                <p className="text-gray-300">WHO báo cáo các bệnh hô hấp mãn tính gây ra 3 triệu ca tử vong mỗi năm.</p>
              </div>
            </div>
          </section>

          {/* Tai nạn và chấn thương */}
          <section className="bg-gradient-to-br from-pink-900/50 to-red-900/50 backdrop-blur-sm 
            border border-pink-700/30 rounded-2xl p-6 
            hover:border-pink-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)]">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">2. Tai Nạn và Chấn Thương</h2>
            <div className="space-y-4">
              <div className="bg-pink-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">Tai Nạn Giao Thông</h3>
                <p className="text-gray-300">WHO thống kê tai nạn giao thông là nguyên nhân hàng đầu gây tử vong ở độ tuổi từ 15 đến 29.</p>
              </div>
              <div className="bg-pink-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">Tai Nạn Lao Động</h3>
                <p className="text-gray-300">Nghiên cứu từ Harvard T.H Chan School cho thấy tác động nghiêm trọng của tai nạn lao động.</p>
              </div>
            </div>
          </section>

          {/* Yếu tố môi trường */}
          <section className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm 
            border border-red-700/30 rounded-2xl p-6 
            hover:border-red-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)]">
            <h2 className="text-2xl font-bold mb-4 text-red-400">3. Yếu Tố Môi Trường</h2>
            <div className="space-y-4">
              <div className="bg-red-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-red-300 mb-2">Thảm Họa Thiên Nhiên</h3>
                <p className="text-gray-300">Harvard và University of Tokyo nghiên cứu về tác động của thiên tai đến tỷ lệ tử vong.</p>
              </div>
              <div className="bg-red-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-red-300 mb-2">Ô Nhiễm Môi Trường</h3>
                <p className="text-gray-300">WHO báo cáo khoảng 7 triệu người chết vì ô nhiễm không khí mỗi năm.</p>
              </div>
            </div>
          </section>

          {/* Nguyên nhân xã hội */}
          <section className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 backdrop-blur-sm 
            border border-orange-700/30 rounded-2xl p-6 
            hover:border-orange-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">4. Nguyên Nhân Xã Hội</h2>
            <div className="space-y-4">
              <div className="bg-orange-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-orange-300 mb-2">Tự Sát</h3>
                <p className="text-gray-300">The Lancet báo cáo có khoảng 800,000 ca tử vong do tự sát mỗi năm trên toàn cầu.</p>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-orange-300 mb-2">Lối Sống Không Lành Mạnh</h3>
                <p className="text-gray-300">University of Cambridge chỉ ra mối liên hệ giữa lối sống và tỷ lệ tử vong.</p>
              </div>
            </div>
          </section>

          {/* Genetic */}
          <section className="lg:col-span-2 bg-gradient-to-br from-amber-900/50 to-yellow-900/50 backdrop-blur-sm 
            border border-amber-700/30 rounded-2xl p-6 
            hover:border-amber-500/50 transition-all duration-500 
            hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)]">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">5. Genetic và Di Truyền</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-amber-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-amber-300 mb-2">Bệnh Di Truyền</h3>
                <p className="text-gray-300">Stanford University và Mayo Clinic nghiên cứu về các bệnh di truyền và tác động của chúng.</p>
              </div>
              <div className="bg-amber-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-amber-300 mb-2">Đột Biến Gen</h3>
                <p className="text-gray-300">Các nghiên cứu về đột biến gen và mối liên hệ với tuổi thọ.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Dữ liệu được tổng hợp từ các nghiên cứu khoa học uy tín</p>
          <p className="mt-2">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        </div>
      </div>
    </div>
  );
}