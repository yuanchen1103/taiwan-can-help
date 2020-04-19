import React, { useState, useCallback } from 'react';
import styles from './YouCanHelp.scss';
import numFormatter from '../../utils/numFormatter';

// eslint-disable-next-line arrow-body-style
const YouCanHelp = () => {
  const [showAddOne, setShowAddOne] = useState(false);
  const handleOnClick = useCallback(() => {
    setShowAddOne(true);
    setTimeout(() => {
      setShowAddOne(false);
    }, 500);
  }, []);
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>YOU CAN HELP</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.roundButton} type="button" onClick={handleOnClick}>
          <img src="/img/mask.svg" alt="mask-icon" />
          {numFormatter(1300)}
        </button>
        <span
          className={styles.addOne}
          style={{
            opacity: showAddOne ? 1 : 0,
            transform: showAddOne ? 'scale(1)' : 'scale(1.2)',
          }}
        >
          +1
        </span>
      </div>
    </section>
  );
};

export default YouCanHelp;
