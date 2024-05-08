import { getDB,initializeContestantsTable } from '@/lib/postgres'; // Cambiar la importación para obtener la conexión a PostgreSQL
import { NextRequest, NextResponse } from 'next/server';
import { z } from "zod";

export const dynamic = 'force-dynamic';

const NewContestant = z.object({
  name: z.string(),
  surname: z.string(),
  gender: z.enum(["Male", "Female", "Other"]),
});

type NewContestant = z.infer<typeof NewContestant>;
initializeContestantsTable();
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

// API Key
export async function POST(req: NextRequest) {
  try {
    let data: NewContestant = await req.json();
    data = NewContestant.parse(data);
    const db = await getDB();

    // Consulta para insertar un nuevo concursante
    const insertQuery = `INSERT INTO contestants (name, surname, gender, votes, createdAt) VALUES ($1, $2, $3, $4, $5)`;
    const values = [data.name, data.surname, data.gender, [], new Date()];
    await db.query(insertQuery, values);

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