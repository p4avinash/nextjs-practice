import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export function middleware(request, NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    console.log("Message from middleware for About")
    return NextResponse.json({
      msg: "Message for about route from middleware",
    })
  }

  // if (request.nextUrl.pathname.startsWith("/drinks")) {
  //   console.log("Message from middleware for Drinks")
  //   return NextResponse.json({
  //     msg: "Message for drinks route from middleware",
  //   })
  // }
}

export const config = {
  // matcher: ["/about", "/drinks"],
  matcher: "/about",
}

// export function middleware(request) {
//   return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//   matcher: ["/about/:path*"],
// }
