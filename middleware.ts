import { NextRequest, NextResponse } from 'next/server';
import { authRoutes, privateRoutes, publicRoutes } from './routes/routes';

const compareRoute = (route: any, pathname: string) => {
    if (typeof (route) === "object" && route.test(pathname) || route === pathname) {
        return true
    }
}

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isPrivateRoute = privateRoutes.some((route: any) => compareRoute(route, path));
    const isPublicRoute = publicRoutes.some((route: any) => path.startsWith(route));
    const isAuthRoute = authRoutes.some((route: any) => path.startsWith(route));

    const token = req.cookies.get('token');
    if (!token && isPrivateRoute) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    if (token && isAuthRoute) {
        return NextResponse.redirect(new URL('/', req.url));
    }
    if (isPublicRoute) {
        return NextResponse.next();
    }
}
