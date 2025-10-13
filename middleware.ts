import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (!pathname.startsWith('/admin')) return NextResponse.next()

  // Allow access to the login page without session
  if (pathname.startsWith('/admin/login')) return NextResponse.next()

  const session = req.cookies.get('vw_admin')?.value
  if (session === 'ok') return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = '/admin/login'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/admin/:path*'],
}


