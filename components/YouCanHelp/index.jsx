import React, { useState, useCallback, useEffect } from 'react';
import numFormatter from '@/utils/numFormatter';
import getter from '@/utils/getter';
import poster from '@/utils/poster';
import styles from './YouCanHelp.scss';


const YouCanHelp = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getter('/api/interaction').then((data) => {
      setCount(data.value);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }, []);

  const [clickCount, setClickCount] = useState(0);

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
          {isLoading ? 'Loading...' : numFormatter(count + clickCount)}
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
