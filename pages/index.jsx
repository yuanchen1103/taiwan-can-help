import React from 'react';
import {
  shape,
  number,
  arrayOf,
  oneOfType,
  string,
} from 'prop-types';
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
import mapMockData from '@/mockData/map';

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
    const mapData = await getter(`${host}/api/map/asset`, {
      headers: {
        'Accept-Language': 'zh-TW',
      },
    });
    return mapData;
  } catch {
    return mapMockData;
  }
}

async function getGovAsset(host) {
  try {
    const { govAssetList = [] } = await getter(`${host}/api/gov/asset`, {
      headers: {
        'Accept-Language': 'zh-TW',
      },
    }) || {};
    return govAssetList;
  } catch {
    return [];
  }
}

async function getComAsset(host) {
  try {
    const { comAssetList = [] } = await getter(`${host}/api/com/asset`, {
      headers: {
        'Accept-Language': 'zh-TW',
      },
    }) || {};
    return comAssetList;
  } catch {
    return [];
  }
}

export default function Index({ interactionCount, mapData, govAssetList, comAssetList }) {
  console.log('werwe', govAssetList, comAssetList)
  return (
    <I18nProvider>
      <Banner />
      <AnimatedBanner />
      <Header />
      <TaiwanIsHelping mapData={mapData} />
      <GovCanHelp govAssetList={govAssetList} />
      <ICanHelp />
      <YouCanHelp interactionCount={interactionCount} />
      <Footer />
    </I18nProvider>
  );
}

Index.propTypes = {
  interactionCount: number.isRequired,
  mapData: shape().isRequired,
  govAssetList: arrayOf(oneOfType([number, string])).isRequired,
  comAssetList: arrayOf(oneOfType([number, string])).isRequired,
};

Index.getInitialProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const [interactionCount, mapData, govAssetList, comAssetList] = await Promise.all([
    getInteractionCount(origin),
    getMapData(origin),
    getGovAsset(origin),
    getComAsset(origin),
  ]);
  return {
    interactionCount,
    mapData,
    govAssetList,
    comAssetList,
  };
};
