import React from 'react';
import Head from 'next/head';
// import Example from '../components/Example';
import TaiwanIsHelping from '../components/TaiwanIsHelping';
import GovCanHelp from '../components/GovCanHelp';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Taiwan Can Help!</title>
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/tooltip.css" />
        <link rel="stylesheet" href="/styles/grid.css" />
        <link rel="stylesheet" href="/styles/swiper.css" />
      </Head>
      {/* <Example /> */}
      <TaiwanIsHelping />
      <GovCanHelp />
    </div>
  );
}
