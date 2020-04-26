import React, { useMemo } from 'react';
import Tooltip from 'rc-tooltip';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from 'react-simple-maps';
import { shape } from 'prop-types';
import numFormatter from '@/utils/numFormatter';
import thousandComma from '@/utils/thousandComma';
import styles from './TaiwanIsHelping.scss';
import geoUrl from './geo.json';

const TaiwanIsHelping = ({ mapData }) => {
  const maskTotalCount = useMemo(
    () => mapData.mapAssetList.reduce((accumulate, current) => accumulate + current.assetNum, 0),
    [mapData],
  );
  const countryTotalCount = useMemo(() => mapData.mapAssetList.length, [mapData]);
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className={styles.title}>TAIWAN IS HELPING</h1>
            <h2 className={styles.subTitle}>全球健康 臺灣來幫忙</h2>
          </div>
          <div className="col-md-4">
            <div className={styles.infoWrapper}>
              <div className={styles.infoGroup}>
                <h6>捐贈口罩數</h6>
                <p>{numFormatter(maskTotalCount)}</p>
              </div>
              <div className={styles.infoGroup}>
                <h6>國家數</h6>
                <p>{thousandComma(countryTotalCount)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147,
          }}
        >
          <Graticule stroke="#F9F9F9" />
          <Geographies
            geography={geoUrl}
            fill="#D6D6DA"
            stroke="#FFFFFF"
            strokeWidth={0.5}
          >
            {(item) => {
              const { geographies } = item;
              return geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ));
            }}
          </Geographies>
          {mapData.mapAssetList.map(({
            assetLink,
            assetGeo,
            assetCountry,
            assetNum,
          }) => (
            <Tooltip
              key={assetCountry}
              placement="top"
              overlay={`${assetCountry}: ${thousandComma(assetNum)}`}
            >
              <Marker
                coordinates={assetGeo.reverse()}
                className={styles.marker}
              >
                <a href={assetLink} target="blank">
                  <g
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <path
                      d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                      fill="#0ccda3"
                    />
                    <circle cx="12" cy="10" r="3" fill="#ffffff" />
                  </g>
                </a>
              </Marker>
            </Tooltip>
          ))}
        </ComposableMap>
      </div>
    </section>
  );
};

TaiwanIsHelping.propTypes = {
  mapData: shape().isRequired,
};

export default TaiwanIsHelping;
