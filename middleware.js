import { NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { locales } from './app/config/i18n'

function getLocale(request) {
  // Luôn ưu tiên cookie đã lưu
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Nếu không có cookie, thử lấy từ URL hiện tại
  const pathname = request.nextUrl.pathname
  const currentLocale = pathname.split('/')[1]
  if (currentLocale && locales.includes(currentLocale)) {
    return currentLocale
  }

  // Nếu không có cả cookie và URL locale, thử lấy từ header
  let headers = new Headers(request.headers)
  let acceptLanguage = headers.get('accept-language')
  if (acceptLanguage) {
    let languages = new Negotiator({ headers: { 'accept-language': acceptLanguage } }).languages()
    try {
      return matchLocale(languages, locales, 'vi')
    } catch (e) {
      return 'vi'
    }
  }

  return 'vi'
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  // Bỏ qua các static routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Lấy locale từ cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  
  // Kiểm tra xem URL hiện tại có locale không
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Nếu có cookie locale, đảm bảo URL khớp với cookie
  if (cookieLocale) {
    if (pathnameHasLocale) {
      const currentLocale = pathname.split('/')[1]
      if (currentLocale !== cookieLocale) {
        // Redirect về URL với locale từ cookie
        const newPathname = pathname.replace(`/${currentLocale}`, `/${cookieLocale}`)
        const newUrl = new URL(newPathname, request.url)
        request.nextUrl.searchParams.forEach((value, key) => {
          newUrl.searchParams.set(key, value)
        })
        return NextResponse.redirect(newUrl)
      }
    } else {
      // Thêm cookie locale vào URL
      const newUrl = new URL(`/${cookieLocale}${pathname}`, request.url)
      request.nextUrl.searchParams.forEach((value, key) => {
        newUrl.searchParams.set(key, value)
      })
      return NextResponse.redirect(newUrl)
    }
    return NextResponse.next()
  }

  // Nếu không có cookie, xử lý như bình thường
  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Lấy locale từ header hoặc mặc định
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  request.nextUrl.searchParams.forEach((value, key) => {
    newUrl.searchParams.set(key, value)
  })

  const response = NextResponse.redirect(newUrl)
  
  // Set cookie cho locale mới
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 24 * 60 * 60,
    path: '/'
  })

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 