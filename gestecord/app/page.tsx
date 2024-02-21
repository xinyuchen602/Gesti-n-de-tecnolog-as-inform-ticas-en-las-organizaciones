"use client";

import header from './header.jpg'
import Image from 'next/image'

export default function Home() {
  const votar = (voto: number) => alert(voto);
  return (
    <main id="container">
      <h1><div id="logo">Operación Triunfo</div></h1>
      <Image src={header.src} className="centered-image" alt="header"></Image>
      <div id="space"></div>
      <div id="form">
        <button name="vote" value="1" onClick={() => votar(1)} className="button button1">Voto a LUCAS</button>
        <button name="vote" value="2" onClick={() => votar(2)} className="button button2">Voto a SUZETE</button>
      </div>
    </main>
  );
}
