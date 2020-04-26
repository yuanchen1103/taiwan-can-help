import React from 'react';
import { shape, number, arrayOf } from 'prop-types';
import absoluteUrl from 'next-absolute-url';
import { I18nProvider } from '@/i18n/I18nContext';
import Header from '@/components/Header';
import TaiwanIsHelping from '@/components/TaiwanIsHelping';
import ICanHelp from '@/components/ICanHelp';
import GovCanHelp from '@/components/GovCanHelp';
import ComCanHelp from '@/components/ComCanHelp';
import YouCanHelp from '@/components/YouCanHelp';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import AnimatedBanner from '@/components/AnimatedBanner';
import getter from '@/utils/getter';
import mapMockData from '@/mockData/map';
import govAssetMockData from '@/mockData/govAsset';
import mediaAssetMockData from '@/mockData/mediaAsset';
import comAssetMockData from '@/mockData/comAsset';
import icanAssetMockData from '@/mockData/icanAsset';

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
    if (govAssetList.length) return govAssetList;
    return govAssetMockData.govAssetList;
  } catch {
    const { govAssetList } = govAssetMockData;
    return govAssetList;
  }
}

async function getMediaAsset(host) {
  try {
    const { mediaAssetList = [] } = await getter(`${host}/api/media/asset`, {
      headers: {
        'Accept-Language': 'zh-TW',
      },
    }) || {};
    if (mediaAssetList.length) return mediaAssetList;
    return mediaAssetMockData.mediaAssetList;
  } catch {
    const { mediaAssetList } = mediaAssetMockData;
    return mediaAssetList;
  }
}

async function getComAsset(host) {
  try {
    const { comAssetList = [] } = await getter(`${host}/api/com/asset`, {
      headers: {
        'Accept-Language': 'zh-TW',
      },
    }) || {};
    if (comAssetList.length) return comAssetList;
    return comAssetMockData.comAssetList;
  } catch {
    const { comAssetList } = comAssetMockData;
    return comAssetList;
  }
}

async function getIcanAsset(host) {
  try {
    const { icanAssetList = [] } = await getter(`${host}/api/ican/asset`, {
      headers: {
        'Accept-Language': 'zh-TW',
      },
    }) || {};
    if (icanAssetList.length) return icanAssetList;
    return icanAssetMockData.icanAssetList;
  } catch {
    const { icanAssetList } = icanAssetMockData;
    return icanAssetList;
  }
}

export default function Index({
  interactionCount,
  mapData,
  govAssetList,
  mediaAssetList,
  comAssetList,
  icanAssetList,
}) {
  return (
    <I18nProvider>
      <Banner />
      <AnimatedBanner />
      <Header />
      <TaiwanIsHelping mapData={mapData} />
      <GovCanHelp govAssetList={govAssetList} mediaAssetList={mediaAssetList} />
      <ComCanHelp comAssetList={comAssetList} />
      <ICanHelp icanAssetList={icanAssetList} />
      <YouCanHelp interactionCount={interactionCount} />
      <Footer />
    </I18nProvider>
  );
}

Index.propTypes = {
  interactionCount: number.isRequired,
  mapData: shape().isRequired,
  govAssetList: arrayOf(shape()).isRequired,
  mediaAssetList: arrayOf(shape()).isRequired,
  comAssetList: arrayOf(shape()).isRequired,
  icanAssetList: arrayOf(shape()).isRequired,
};

Index.getInitialProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const [
    interactionCount,
    mapData,
    govAssetList,
    mediaAssetList,
    comAssetList,
    icanAssetList,
  ] = await Promise.all([
    getInteractionCount(origin),
    getMapData(origin),
    getGovAsset(origin),
    getMediaAsset(origin),
    getComAsset(origin),
    getIcanAsset(origin),
  ]);
  return {
    interactionCount,
    mapData,
    govAssetList,
    mediaAssetList,
    comAssetList,
    icanAssetList,
  };
};
