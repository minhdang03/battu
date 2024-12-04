import { Roboto_Flex } from 'next/font/google';
import Navbar from "./components/Navbar";
import "./globals.css";
import Stars from "./components/Stars";
import Footer from "./components/Footer";
const roboto = Roboto_Flex({
  subsets: ['vietnamese', 'latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "SỐNG THỌ NGÀN NĂM - immortality",
  description: "Humans have always harbored a profound desire for a life of health, happiness, and prosperity. The ultimate goal is to achieve a state of well-being, free from the threats of illness, genetic disorders, and unforeseen calamities in life. Attaining such a life would not only ensure longevity but also provide protection against unexpected events such as accidents or diseases like cancer. If humanity could realize this ideal, it would pave the way for a future where the fear of death and suffering would be significantly alleviated.",
  image: "/images/og/battu.jpg",
  url: "https://bat-tu.vercel.app",
  type: "website",
  robots: "follow, index",
};


export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      
      <body 
        className={`
          ${roboto.variable} 
          antialiased 
          min-h-screen 
          bg-black
          text-gray-100
          relative
          overflow-x-hidden
        `}
      >
        {/* Background Effects */}
        <Stars />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-sm z-50 border-b border-gray-200/10">
            <Navbar />
          </div>
          
          <main className="container mx-auto px-2 sm:px-4 pt-24">
            {/* Animated Header Text */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-center font-mono pointer-events-none">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">
LẬP TRÌNH BẤT TỬ              </div>
              <div className="text-xs text-gray-600">
SỐNG THỌ NGÀN NĂM              </div>
            </div>

            {children}
          </main>
      <Footer />
          {/* Decorative Elements - Adjusted colors */}
          <div className="fixed bottom-4 left-4 text-xs font-mono text-gray-500 pointer-events-none">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              WEBSITE UNDER CONSTRUCTION
            </span>
          </div>
          <div className="fixed bottom-4 right-4 text-xs font-mono text-gray-500 pointer-events-none">
            v1.0.0
          </div>
        </div>
      </body>
    </html>
  );
}
