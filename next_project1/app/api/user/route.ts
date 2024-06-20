import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  // do the Zod validation before proceeding in the real project

  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  return NextResponse.json({
    message: "Signed up successfully",
  });
}

export async function GET(req: NextRequest) {
  const user = await client.user.findFirst({});
  return NextResponse.json({ name: user?.username, password: user?.password });
}
