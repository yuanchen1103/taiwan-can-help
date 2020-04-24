import React, { useState, useCallback } from 'react';
import { number } from 'prop-types';
import numFormatter from '@/utils/numFormatter';
import poster from '@/utils/poster';
import styles from './YouCanHelp.scss';


const YouCanHelp = ({ interactionCount }) => {
  const [clickCount, setClickCount] = useState(interactionCount);

  const [showAddOne, setShowAddOne] = useState(false);

  const updateCount = useCallback(() => {
    poster('/api/interaction', {});
  }, []);

  const handleOnClick = useCallback(() => {
    setShowAddOne(true);
    setClickCount((prev) => prev + 1);
    setTimeout(() => {
      setShowAddOne(false);
    }, 500);
    updateCount();
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>YOU CAN HELP</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.roundButton} type="button" onClick={handleOnClick}>
          <img src="/img/mask.svg" alt="mask-icon" />
          {numFormatter(clickCount)}
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

YouCanHelp.propTypes = {
  interactionCount: number.isRequired,
};

export default YouCanHelp;
