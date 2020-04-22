import React, { useEffect, useCallback, useState } from 'react';
import styles from './AnimatedBanner.scss';
import Group1 from './Group1';

const AnimatedBanner = () => {
  const [intervalId, setIntervalId] = useState(null);
  const [showGroup1, setShowGroup1] = useState(false);
  const handleAnimated = useCallback(() => {
    setShowGroup1(true);
    setTimeout(() => {
      setShowGroup1(false);
    }, 4000);
  }, []);
  useEffect(() => {
    handleAnimated();
    setIntervalId(
      setInterval(() => {
        handleAnimated();
      }, 5000),
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.groupWrapper}>{showGroup1 && <Group1 />}</div>
      </div>
    </section>
  );
};

export default AnimatedBanner;
