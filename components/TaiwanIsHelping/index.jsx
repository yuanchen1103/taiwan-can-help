import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Tooltip from 'rc-tooltip';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from 'react-simple-maps';
import styles from './TaiwanIsHelping.scss';
import geoUrl from './geo.json';
import thousandComma from '../../utils/thousandComma';

const markers = [
  {
    coordinates: [120, 23.5],
    name: '台灣',
    count: 12000,
  },
];

// eslint-disable-next-line arrow-body-style
const TaiwanIsHelping = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col md={8}>
            <h1 className={styles.title}>TAIWAN IS HELPING</h1>
            <h2 className={styles.subTitle}>臺灣不只可以幫忙，而且正在幫忙</h2>
          </Col>
          <Col md={4}>
            <div className={styles.infoWrapper}>
              <div className={styles.infoGroup}>
                <h6>捐贈口罩數</h6>
                <p>{thousandComma(1000)}</p>
              </div>
              <div className={styles.infoGroup}>
                <h6>捐贈國家數</h6>
                <p>{thousandComma(32)}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <ComposableMap>
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
          {markers.map(({ coordinates, name, count }) => (
            <Tooltip
              key={name}
              placement="top"
              overlay={`${name}: ${thousandComma(count)}`}
            >
              <Marker coordinates={coordinates} className={styles.marker}>
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
              </Marker>
            </Tooltip>
          ))}
        </ComposableMap>
      </Container>
    </section>
  );
};

export default TaiwanIsHelping;
