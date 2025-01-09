import { getTranslations } from '../config/i18n'
import Universe from './components/Universe/Universe'
import Founder from './components/Founder'

export default async function Home({ params }) {
  const lang = params?.lang || 'vi';
  const dict = await getTranslations(lang)
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col">
        {/* Tiêu đề */}
        <div className="pt-2 z-30">
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg text-center">
            {dict.home.title}
          </h1>
        </div>
        
        {/* Universe Background */}
        <div className="relative h-[300px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Universe showStars={true} showSolarSystem={true} />
          </div>
        </div>
        
        {/* Đoạn text mô tả */}
        <div className="pt-20 z-30">
          <p className="text-base sm:text-xl text-gray-700 text-center max-w-3xl mx-auto px-4">
            {dict.home.description}
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 sm:py-16">
        <Founder />
      </section>
    </div>
  );
} 