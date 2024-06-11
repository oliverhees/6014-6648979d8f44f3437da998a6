import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req) {
  console.log(req);
  const { searchParams } = new URL(req.url);
  const apiKey = searchParams.get("apiKey");
  const validApiKey = process.env.API_KEY || "12345";

  if (apiKey !== validApiKey) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return NextResponse.next();
}

// Nur für API-Routen anwenden
export const config = {
  matcher: "/api/:path*",
};
