import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <section className={styles.section}>
    <img className={styles.coverImg} src="/img/banner.png" alt="" />
  </section>
);

export default Banner;
