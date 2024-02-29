import { getDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { z } from "zod";

export const dynamic = 'force-dynamic';

const NewContestant = z.object({
  name: z.string(),
  surname: z.string(),
  gender: z.enum(["Male", "Female", "Other"]),
});

type NewContestant = z.infer<typeof NewContestant>;

export async function GET(_req: NextRequest) {
  try {
    const db = await getDB();
    const contestants = await db.collection("contestants").find()
      .project({ votes: 0 })
      .sort({ createdAt: -1 })
      .limit(2)
      .toArray();
    return NextResponse.json({ contestants: contestants });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

// API Key
export async function POST(req: NextRequest) {
  try {
    let data: NewContestant = await req.json();
    data = NewContestant.parse(data);
    const db = await getDB();
    await db.collection("contestants").insertOne({ ...data, votes: [], createdAt: new Date() });
    return NextResponse.json({ message: "Contestant registered correctly" });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ errors: e.format() }, { status: 400 });
    } else {
      console.error(e);
      return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
  }
}
