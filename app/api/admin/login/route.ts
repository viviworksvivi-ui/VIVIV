import { NextResponse } from 'next/server'

const USERNAME = 'aymen'
const PASSWORD = 'aymen2025'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()
    if (username === USERNAME && password === PASSWORD) {
      const res = NextResponse.json({ ok: true })
      res.cookies.set('vw_admin', 'ok', {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 8, // 8h
      })
      return res
    }
  } catch {}
  return NextResponse.json({ error: 'invalid' }, { status: 401 })
}




