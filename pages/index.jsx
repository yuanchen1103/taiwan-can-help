import React from 'react';
import { shape, number } from 'prop-types';
import absoluteUrl from 'next-absolute-url';
import { I18nProvider } from '@/i18n/I18nContext';
import Header from '@/components/Header';
import TaiwanIsHelping from '@/components/TaiwanIsHelping';
import ICanHelp from '@/components/ICanHelp';
import GovCanHelp from '@/components/GovCanHelp';
import YouCanHelp from '@/components/YouCanHelp';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import AnimatedBanner from '@/components/AnimatedBanner';
import getter from '@/utils/getter';

async function getInteractionCount(host) {
  try {
    const interaction = await getter(`${host}/api/interaction`);
    return interaction.value || 0;
  } catch {
    return 0;
  }
}

async function getMapData(host) {
  try {
    const mapData = await getter(`${host}/api/map/asset`);
    return mapData;
  } catch {
    return {};
  }
}

export default function Index({ interactionCount, mapData }) {
  return (
    <I18nProvider>
      <Banner />
      <AnimatedBanner />
      <Header />
      <TaiwanIsHelping mapData={mapData} />
      <YouCanHelp interactionCount={interactionCount} />
      <GovCanHelp />
      <ICanHelp />
      <Footer />
    </I18nProvider>
  );
}

Index.propTypes = {
  interactionCount: number.isRequired,
  mapData: shape().isRequired,
};

Index.getInitialProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const [interactionCount, mapData] = await Promise.all([
    getInteractionCount(origin),
    getMapData(origin),
  ]);
  return { interactionCount, mapData };
};
