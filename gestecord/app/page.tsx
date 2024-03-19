"use client";

import { useState } from 'react';
import header from './header.jpg'
import Image from 'next/image'

export default function Home() {
  const [message, setMessage] = useState('');

  const votar = async (contestantId: string) => {
    try {
      const response = await fetch(`http://localhost:8000/api/votes/${contestantId}`, {
        method: 'POST'
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  const verContestants = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/contestants');
      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <main id="container">
      <h1><div id="logo">Operación Triunfo</div></h1>
      <Image src={header.src} className="centered-image" alt="header"></Image>
      <div id="space"></div>
      <div id="form">
        <button onClick={() => votar('65f8b2489193d7009bd1ae9a')} className="button button1">Voto a LUCAS</button>
        <button onClick={() => votar('65f8b2169193d7009bd1ae99')} className="button button2">Voto a SUZETE</button>
        <button onClick={() => verContestants()} className="button button3">Ver Contestants</button>
      </div>
      <div id="message">{message}</div>
    </main>
  );
}
