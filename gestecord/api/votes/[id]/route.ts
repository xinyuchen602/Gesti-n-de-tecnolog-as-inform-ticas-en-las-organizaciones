import { getDB } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = new ObjectId(params.id);
    const db = await getDB();
    const contestants = await db.collection("contestants").find()
      .project({ _id: 1 })
      .sort({ createdAt: -1 })
      .limit(2)
      .toArray();
    if (!contestants.find(doc => doc._id == params.id))
      throw new Error("Contestant is already out of contest");
    await db.collection("contestants").updateOne({ _id: id }, {
      $push: { votes: new Date() }
    });
    return NextResponse.json({ message: "Vote registered correctly" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
