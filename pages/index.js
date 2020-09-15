import Head from 'next/head';
import React from 'react';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Manage</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>
        <Gallery />
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">
            Next.js + Tailwind CSS
          </h1>
        </div>
      </main>

      <footer />
    </div>
  );
}
