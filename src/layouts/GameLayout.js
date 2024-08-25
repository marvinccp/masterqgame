import Head from 'next/head';
import React from 'react'
import { Header } from '@/components/header/Header';


const GameLayout = ({ name='Master Question', category, start } ) => {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header 
      category={category} 
      start={start} 
      />
    </>
  );
}

export default GameLayout;