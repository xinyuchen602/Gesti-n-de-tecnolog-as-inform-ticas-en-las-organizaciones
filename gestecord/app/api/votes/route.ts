import { getDB,initializeContestantsTable } from '@/lib/postgres'; // Cambiar la importación para obtener la conexión a PostgreSQL
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// API Key
export async function GET(_req: NextRequest) {
  try {
    const db = await getDB();

    // Consulta para obtener los dos concursantes más recientes
    const contestantsQuery = 'SELECT * FROM contestants ORDER BY createdAt ASC LIMIT 2';
    const contestantsResult = await db.query(contestantsQuery);
    const contestants = contestantsResult.rows;
    
    return NextResponse.json({ contestants: contestants });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
