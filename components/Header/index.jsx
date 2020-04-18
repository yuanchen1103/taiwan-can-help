import React, { useContext } from 'react'
import Head from 'next/head';
import { I18nContext } from '@/i18n/I18nContext';

const Header = () => {
  const { t } = useContext(I18nContext);
  return <Head>
    <title>{t('header')}</title>
    <link rel="stylesheet" href="/styles/reset.css" />
    <link rel="stylesheet" href="/styles/index.css" />
    <link rel="stylesheet" href="/styles/tooltip.css" />
    <link rel="stylesheet" href="/styles/grid.css" />
  </Head>;
};

export default Header;