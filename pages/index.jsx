import React from 'react';
import PropTypes from 'prop-types';
import { I18nProvider } from '@/i18n/I18nContext';
import Header from '@/components/Header';
import TaiwanIsHelping from '@/components/TaiwanIsHelping';
import YouCanHelp from '@/components/YouCanHelp';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import AnimatedBanner from '@/components/AnimatedBanner';
import getter from '@/utils/getter';

export default function Index({ interactionCount }) {
  return (
    <I18nProvider>
      <Banner />
      <AnimatedBanner />
      <Header />
      <TaiwanIsHelping />
      <YouCanHelp interactionCount={interactionCount} />
      <Footer />
    </I18nProvider>
  );
}

Index.propTypes = {
  interactionCount: PropTypes.number.isRequired,
};

Index.getInitialProps = async ({ req }) => {
  const host = req.headers.referer;
  let interaction;
  try {
    interaction = await getter(`${host}api/interaction`);
  } catch {
    interaction = { value: 0 };
  }
  return { interactionCount: interaction.value };
};
