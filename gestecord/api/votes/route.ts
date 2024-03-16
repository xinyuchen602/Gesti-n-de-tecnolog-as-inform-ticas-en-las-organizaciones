import { getDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// API Key
export async function GET(_req: NextRequest) {
  try {
    const db = await getDB();
    const contestants = await db.collection("contestants").find()
      .sort({ createdAt: -1 })
      .limit(2)
      .toArray();
    return NextResponse.json({ contestants: contestants });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
