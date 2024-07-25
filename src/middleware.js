import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside

export function middleware(request) {
  // let body = await request.json();
  // if (request.method === "POST") {
  //   // Handle POST request here
  //   // return NextResponse.json(body);
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/review",
};
