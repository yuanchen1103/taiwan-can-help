import React from 'react';
import { I18nProvider } from '@/i18n/I18nContext';
import Header from '@/components/Header';
// import Example from '@/components/Example';
import TaiwanIsHelping from '@/components/TaiwanIsHelping';
import ICanHelp from '@/components/ICanHelp';
import GovCanHelp from '@/components/GovCanHelp';
import YouCanHelp from '@/components/YouCanHelp';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <I18nProvider>
      <div>
        <Header />
        {/* <Example /> */}
        <TaiwanIsHelping />
        <GovCanHelp />
        <ICanHelp />
        <YouCanHelp />
        <Footer />
      </div>
    </I18nProvider>
  );
}
