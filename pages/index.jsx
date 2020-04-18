import React from 'react';
import Head from 'next/head';
// import Example from '../components/Example';
import TaiwanIsHelping from '../components/TaiwanIsHelping';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Taiwan Can Help!</title>
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/tooltip.css" />
      </Head>
      {/* <Example /> */}
      <TaiwanIsHelping />
    </div>
  );
}
