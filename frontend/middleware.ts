import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export  function middleware(request: NextRequest) {
  const userToken = request.cookies.get('token')?.value;
  if(userToken ) {
    if (!request.url.includes('dashboard')) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }
  else {
   return NextResponse.redirect(new URL('/login',request.url))
   
  }
}
export const config = { matcher: [ '/dashboard/:path*'] };