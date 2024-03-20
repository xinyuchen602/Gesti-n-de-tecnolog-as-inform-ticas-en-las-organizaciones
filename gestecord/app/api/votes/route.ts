import { getDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

export const dynamic = 'force-dynamic';

// API Key
export async function GET(_req: NextRequest) {
  try {
    const db = await getDB();
    console.log(_req);
    // Extraer información relevante de la solicitud
    const url = _req.url.toString();
    const method = _req.method;
    const headersObj: Record<string, string> = {};
    _req.headers.forEach((value: string, name: string) => {
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
