import prisma from "@/app/lib/prisma";
import { sql } from "@vercel/postgres";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import { v4 as uuidv4 } from "uuid";

export async function GET(
  req: NextApiRequest,
  context: { params: { shortened: string } }
) {
  const res = await prisma.savedUrl.findMany({
    where: { short: context.params.shortened },
  });

  return NextResponse.json({ res }, { status: 200 });
}

export async function POST(
  req: NextApiRequest,
  context: { params: { shortened: string } }
) {
  // check to prevent collisions
  // post localhost:3000/shorten/[short string input]?url=https://google.com
  try {
    const { searchParams } = new URL(req.url || "");
    const reqUrl = searchParams.get("url");
    if (reqUrl) {
      const res = await prisma.savedUrl.create({
        data: {
          url: reqUrl,
          short: context.params.shortened,
        },
      });

      //   const res =
      //     await sql`INSERT INTO UrlMap (id, url, shortened) VALUES (${id}, ${reqUrl}, ${context.params.shortened}) RETURNING *`;
      return NextResponse.json({ res }, { status: 200 });
    } else {
      return new Error("No url provided");
    }
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
