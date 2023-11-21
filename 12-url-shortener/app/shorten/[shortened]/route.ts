import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
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
      return redirect(res.url);
    }
    return NextResponse.json({ found: false }, { status: 404 });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request | NextRequest,
  context: { params: { shortened: string } }
) {
  try {
    if (!context.params.shortened) {
      return NextResponse.json(
        { Error: "No shortened string provided." },
        { status: 400 }
      );
    }

    const { searchParams } = new URL(req.url || "");
    const reqUrl = searchParams.get("url");

    if (!reqUrl) {
      return NextResponse.json({ Error: "No URL provided." }, { status: 400 });
    }

    const duplicate = await prisma.savedUrl.findFirst({
      where: {
        short: context.params.shortened,
      },
    });

    if (!duplicate) {
      if (reqUrl) {
        const res = await prisma.savedUrl.create({
          data: {
            url: reqUrl,
            short: context.params.shortened,
          },
        });

        return NextResponse.json({ res }, { status: 200 });
      }
    } else {
      return NextResponse.json(
        { Error: "Duplicate shortened string." },
        { status: 400 }
      );
    }
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
