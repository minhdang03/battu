import { Roboto_Flex } from 'next/font/google';
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import "./globals.css";
import Stars from "./components/Universe/Stars";
import Footer from "./components/Footer";

const roboto = Roboto_Flex({
  subsets: ['vietnamese', 'latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "SÓNG THỌ NGÀN NĂM - immortality",
  description: "Humans have always harbored a profound desire for a life of health, happiness, and prosperity. The ultimate goal is to achieve a state of well-being, free from the threats of illness, genetic disorders, and unforeseen calamities in life. Attaining such a life would not only ensure longevity but also provide protection against unexpected events such as accidents or diseases like cancer. If humanity could realize this ideal, it would pave the way for a future where the fear of death and suffering would be significantly alleviated.",
  image: "/images/og/battu.jpg",
  url: "https://immortality.vn",
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
        
        {/* Main Navbar - scrolls with page */}
        <div className="w-full">
          <Navbar />
        </div>
        {/* Secondary Navbar - moves to top on scroll */}
        <div className="sticky top-0 bg-black/70 backdrop-blur-sm z-[100] border-b border-gray-200/10">
          <Navbar2 />
        </div>
        
        {/* Content */}
        <main className="container mx-auto px-2 sm:px-4 pt-8 relative z-20">

          {children}
        </main>

        <Footer />
        
        {/* Decorative Elements */}
        <div className="fixed bottom-4 left-4 text-xs font-mono text-gray-500 pointer-events-none">
          <span className="inline-flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            WEBSITE UNDER CONSTRUCTION
          </span>
        </div>
        <div className="fixed bottom-4 right-4 text-xs font-mono text-gray-500 pointer-events-none">
          v1.0.0
        </div>
      </body>
    </html>
  );
}
