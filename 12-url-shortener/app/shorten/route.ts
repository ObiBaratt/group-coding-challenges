import { NextRequest, NextResponse } from "next/server";

// This catches bad reqs like: GET localhost:3000/shorten/
export async function GET(req: Request | NextRequest) {
  return NextResponse.json(
    { Error: "No shortened string provided." },
    { status: 400 }
  );
}

