export const defaultLocale = 'vi'
export const locales = ['vi', 'en']

// Async version
export const getTranslations = async (locale) => {
  return (await import(`../dictionaries/${locale}.json`)).default
}

// Sync version for client components
const dictionaries = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      practice: "Practice",
      research: "Research",
      theory: "Theory"
    },
    home: {
      title: "LIVE A THOUSAND YEARS",
      subtitle: "FORMULA FOR LIVING A THOUSAND YEARS",
      description: "Building a world where love is central...",
      under_construction: "WEBSITE UNDER CONSTRUCTION"
    }
  },
  vi: {
    navigation: {
      home: "Trang chủ",
      about: "Giới thiệu",
      practice: "Thực hành",
      research: "Nghiên cứu",
      theory: "Lý thuyết"
    },
    home: {
      title: "SỐNG THỌ NGÀN NĂM",
      subtitle: "CÔNG THỨC SỐNG THỌ NGÀN NĂM",
      description: "Xây dựng một thế giới nơi tình yêu thương là trung tâm...",
      under_construction: "WEBSITE ĐANG XÂY DỰNG"
    }
  }
}

export const getTranslationsSync = (locale) => {
  return dictionaries[locale] || dictionaries.vi
} 