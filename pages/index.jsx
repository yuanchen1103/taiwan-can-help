import React from 'react';
import { I18nProvider } from '@/i18n/I18nContext';
import Header from '@/components/Header';
import TaiwanIsHelping from '@/components/TaiwanIsHelping';
import YouCanHelp from '@/components/YouCanHelp';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

export default function Index() {
  return (
    <I18nProvider>
      <Banner />
      <Header />
      <TaiwanIsHelping />
      <YouCanHelp />
      <Footer />
    </I18nProvider>
  );
}
