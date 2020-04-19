import React from 'react';
import { I18nProvider } from '@/i18n/I18nContext';
import Header from '@/components/Header';
// import Example from '@/components/Example';
import TaiwanIsHelping from '@/components/TaiwanIsHelping';

export default function Index() {
  return (
    <I18nProvider>
      <div>
        <Header />
        {/* <Example /> */}
        <TaiwanIsHelping />
      </div>
    </I18nProvider>
  );
}
