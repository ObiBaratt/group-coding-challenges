import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request | NextRequest,
  context: { params: { shortened: string } }
) {
  try {
    const res = await prisma.savedUrl.findFirst({
      where: {
        short: context.params.shortened,
      },
    });

    if (res) {
      return NextResponse.json({ found: true }, { status: 200 });
    }
    return NextResponse.json({ found: false }, { status: 200 });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
