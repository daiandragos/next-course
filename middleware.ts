// import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
  // * zero or more parameters
  // + one or more parameters
  // ? zeor or one parameters
  matcher: ["/dashboard:path*"],
};
