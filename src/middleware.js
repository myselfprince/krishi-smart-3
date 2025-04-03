import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  
  const isPublicPath = path === '/' || path === '/login' || path === '/signup';
  const token = request.cookies.get('token')?.value || '';

    if(isPublicPath && token && path !== '/'){
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!isPublicPath && !token){
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }



}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/profile',
    // '/marketplace',
    // '/seasonal-crop-planner',
    // '/community',
    // '/farmer-tube',
    // '/disease-detection',
    // '/market-price-predictor',
    // '/blogs',
  ],
}