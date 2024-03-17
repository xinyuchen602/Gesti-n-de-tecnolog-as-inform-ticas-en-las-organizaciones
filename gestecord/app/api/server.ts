import { getDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
export default function handler(req:NextRequest, res:NextResponse) {
  return NextResponse.json({ message: "Hello" }, { status: 200 });
}