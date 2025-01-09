export const defaultLocale = 'vi'
export const locales = ['vi', 'en']

// Async version
export const getTranslations = async (locale) => {
  return (await import(`../dictionaries/${locale}.json`)).default
}

// Sync version for client components
export function getTranslationsSync(locale) {
  try {
    // Sử dụng require để load file JSON một cách đồng bộ
    const dict = require(`../dictionaries/${locale}.json`)
    return dict
  } catch (error) {
    // Fallback to vi if translation not found
    const viDict = require(`../dictionaries/vi.json`)
    return viDict
  }
} 