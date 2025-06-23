import { NextRequest, NextResponse } from "next/server";

const baseURL = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://telltale-storys.com";

export async function middleware(req: NextRequest) {
  const sessionCookie = req.headers.get("cookie")?.match(/session=([^;]*)/)?.[1];

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const sessionRes = await fetch(`${baseURL}/api/session`, {
    headers: { Cookie: `session=${sessionCookie}` },
  });

  if (!sessionRes.ok) {
    console.log("Cookie all good")
    return NextResponse.next()
    //return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};

