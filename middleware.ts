import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    async (req) => {
        const token = getToken({ req })
        const isAuth = !!token
        const isAuthRoute = ["/login", "/register"].some(route => req.nextUrl.pathname.startsWith(route))

        if (isAuthRoute) {
            return isAuth ? NextResponse.redirect(new URL("/home", req.url)) : null
        }
        if (!isAuth) {
            let from = req.nextUrl.pathname;
            if (req.nextUrl.search) {
                from += req.nextUrl.search;
            }

            return NextResponse.redirect(
                new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
            )
        }
    },
    {
        callbacks: {
            async authorized({ req, token }) {
                if (req.nextUrl.pathname === "/admin") return token?.userRole === "admin"
                return !!token
            }
        }
    }
)
export const config = {
    matchers: ["/login", "/register"]
}
