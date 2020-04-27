import React, { useContext } from 'react';
import Head from 'next/head';
import { I18nContext } from '@/i18n/I18nContext';

const Header = () => {
  const { t } = useContext(I18nContext);
  return (
    <Head>
      <title>{t('header')}</title>
      <meta property="og:title" content="Taiwan Can Help!" />
      <meta property="og:description" content="當全球疫情蔓延，臺灣不但妥適控制住疫情，並讓疫情對人民生活的衝擊降到最低。臺灣防疫模式的透明與誠實，提供了民主國家更佳的防疫對策。在此我們分享台灣在政府、企業、個人等各公、私部門的經驗，齊心一同抗疫，向世界傳達 Taiwan can help 的誠摯信念。" />
      <meta property="og:image" content="/img/preview.png" />
      <meta property="og:site_name" content="Taiwan Can Help!" />
      <meta property="og:url" content="https://taiwancan.help" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Taiwan Can Help!" />
      <meta name="twitter:description" content="當全球疫情蔓延，臺灣不但妥適控制住疫情，並讓疫情對人民生活的衝擊降到最低。臺灣防疫模式的透明與誠實，提供了民主國家更佳的防疫對策。在此我們分享台灣在政府、企業、個人等各公、私部門的經驗，齊心一同抗疫，向世界傳達 Taiwan can help 的誠摯信念。" />
      <meta name="twitter:image" content="/img/preview.png" />
      <meta name="twitter:url" content="https://taiwancan.help" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <link rel="stylesheet" href="/styles/index.css" />
      <link rel="stylesheet" href="/styles/tooltip.css" />
      <link rel="stylesheet" href="/styles/grid.css" />
      <link rel="stylesheet" href="/styles/swiper.css" />
      <link rel="stylesheet" href="/styles/animate.css" />
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e9c1ed6f2f897f8" />
    </Head>
  );
};

export default Header;
