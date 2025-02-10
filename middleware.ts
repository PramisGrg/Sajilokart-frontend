import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes in an array
const protectedRoutes = ["/profile"];

export function middleware(req: NextRequest) {
  // Check if the request path is in the protected routes and user has no token
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/cart", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to the specified routes
export const config = {
  matcher: protectedRoutes,
};
