export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              IMMORTALITY
            </h3>
            <p className="text-gray-600">
              Người bất tử sẵn sàng chia sẻ công thức cho loài người (thích sống thọ) hơn loài rùa 200 năm tuổi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Khám Phá</h4>
            <ul className="space-y-2">
              <li>
                <a href="/ly-thuyet" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Lý Thuyết
                </a>
              </li>
              <li>
                <a href="/thuc-hanh" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Thực Hành
                </a>
              </li>
              <li>
                <a href="/nghien-cuu" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Nghiên Cứu
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Kết Nối</h4>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              {/* ... other social icons ... */}
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Email: mr.dang1305@gmail.com</p>
              <p className="text-gray-600">Địa chỉ: Sydney, Australia</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-600 text-center">
            © 2024 IMMORTALITY - SỐNG THỌ NGÀN NĂM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}