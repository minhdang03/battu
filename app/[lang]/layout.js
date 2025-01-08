import { Roboto_Flex } from 'next/font/google';
import { locales } from '../config/i18n'
import { getTranslations } from '../config/i18n'
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Footer from "./components/Footer";
import '../globals.css'

const roboto = Roboto_Flex({
  subsets: ['vietnamese', 'latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ searchParams }) {
  const lang = searchParams?.lang || 'vi'
  const dict = await getTranslations(lang)
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    image: "/images/og/battu.jpg",
    url: "https://immortality.vn",
    type: "website",
    robots: "follow, index",
  }
}

export default async function RootLayout({ children, searchParams }) {
  const lang = searchParams?.lang || 'vi'
  const dict = await getTranslations(lang)
  
  return (
    <html lang={lang}>
      <body 
        className={`
          ${roboto.variable} 
          antialiased 
          min-h-screen 
          bg-white
          text-gray-900
          relative
          overflow-x-hidden
        `}
      >
        {/* Main Navbar - scrolls with page */}
        <div className="w-full">
          <Navbar lang={lang} />
        </div>
        
        {/* Secondary Navbar - moves to top on scroll */}
        <div className="sticky top-0 bg-white/70 backdrop-blur-sm z-[100] border-b border-gray-200">
          <Navbar2 lang={lang} />
        </div>
        
        {/* Content */}
        <main className="container mx-auto px-2 sm:px-4">
          {children}
        </main>

        <Footer lang={lang} />
        
        {/* Decorative Elements */}
        <div className="fixed bottom-4 left-4 text-xs font-mono text-gray-500 pointer-events-none">
          <span className="inline-flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {dict.home.under_construction}
          </span>
        </div>
        <div className="fixed bottom-4 right-4 text-xs font-mono text-gray-500 pointer-events-none">
          v1.0.0
        </div>
      </body>
    </html>
  );
} 