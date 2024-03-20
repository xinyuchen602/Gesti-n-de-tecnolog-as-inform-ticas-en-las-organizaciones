import { getDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { z } from "zod";
import fs from 'fs';

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
    const body = await req.text(); // Lee el cuerpo de la solicitud como texto
    console.log(req);
    // Extraer información relevante de la solicitud
    const url = req.url.toString();
    const method = req.method;
    const headersObj: Record<string, string> = {};
    req.headers.forEach((value: string, name: string) => {
      headersObj[name] = value;
    });
    const headers = JSON.stringify(headersObj);

    // Obtener la fecha actual
    const fechaActual = new Date().toISOString();
    
    // Construir el mensaje de registro con la fecha y los datos de la solicitud
    const mensajeConFecha = `${fechaActual}: ${method} ${url}\nHeaders: ${headers}\n`;

    // Escribir en el archivo de registro
    fs.appendFile('audit.log', mensajeConFecha, (err) => {
      if (err) {
        console.error('Error al registrar la solicitud:', err);
      }
    });

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
