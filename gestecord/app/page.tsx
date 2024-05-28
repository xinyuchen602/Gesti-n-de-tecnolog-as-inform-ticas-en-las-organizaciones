"use client";

import { useState } from 'react';
import header from './header.jpg'
import Image from 'next/image'
import dotenv from 'dotenv';

dotenv.config();

export default function Home() {
  const [message, setMessage] = useState('');

  const votar = async (contestantId: string) => {
    try {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/votes/${contestantId}`, {
      console.log(process.env.NEXT_PUBLIC_API_URL);
      const response = await fetch(`http://votos-1830516429.us-east-1.elb.amazonaws.com:8000/api/votes/${contestantId}`, {
        method: 'POST'      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  const verContestants = async () => {
    try {
      const response = await fetch(`http://votos-1830516429.us-east-1.elb.amazonaws.com:8000/api/contestants`);
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
        <button onClick={() => votar('1')} className="button button1">Voto a LUCAS</button>
        <button onClick={() => votar('2')} className="button button2">Voto a SUZETE</button>
        <button onClick={() => verContestants()} className="button button3">Ver Contestants</button>
      </div>
      <div id="message">{message}</div>
    </main>
  );
}
