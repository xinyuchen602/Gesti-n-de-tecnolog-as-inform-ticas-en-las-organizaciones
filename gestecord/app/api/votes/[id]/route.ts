import { getDB,initializeContestantsTable } from '@/lib/postgres'; // Cambiar la importación para obtener la conexión a PostgreSQL
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDB();

    // Verificar si el concursante está en la base de datos
    const contestantQuery = 'SELECT * FROM contestants WHERE id = $1';
    const contestantResult = await db.query(contestantQuery, [params.id]);
    if (contestantResult.rows.length === 0) {
      throw new Error("Contestant is already out of contest");
    }

    // Registrar el voto
    const voteQuery = 'UPDATE contestants SET votes = $1 WHERE id = $2';
    const currentDate = new Date();
    const jsonDate = { date: currentDate.toJSON() }; // Convertir a formato JSON válido
    await db.query(voteQuery, [jsonDate, params.id]);
    
    return NextResponse.json({ message: "Vote registered correctly" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}