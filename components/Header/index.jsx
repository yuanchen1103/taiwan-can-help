import React, { useContext } from 'react';
import Head from 'next/head';
import { I18nContext } from '@/i18n/I18nContext';

const Header = () => {
  const { t } = useContext(I18nContext);
  return (
    <Head>
      <title>{t('header')}</title>
      <link rel="stylesheet" href="/styles/reset.css" />
      <link rel="stylesheet" href="/styles/index.css" />
      <link rel="stylesheet" href="/styles/tooltip.css" />
      <link rel="stylesheet" href="/styles/grid.css" />
      <link rel="stylesheet" href="/styles/swiper.css" />
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5cb3e923af393d81" />
    </Head>
  );
};

export default Header;
