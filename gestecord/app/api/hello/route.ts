import { getDB } from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const db = await getDB();
  const movies = db.collection("movies").find();
  return NextResponse.json(movies, { status: 200 })
}
