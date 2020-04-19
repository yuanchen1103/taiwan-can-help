import React from 'react';
import styles from './YouCanHelp.scss';

// eslint-disable-next-line arrow-body-style
const YouCanHelp = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>YOU CAN HELP</h1>
      <button className={styles.roundButton} type="button">
        <img src="/img/mask.svg" alt="mask-icon" />
        1.7k
      </button>
    </section>
  );
};

export default YouCanHelp;
