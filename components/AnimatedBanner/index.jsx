import React, { useEffect, useCallback, useState } from 'react';
import styles from './AnimatedBanner.scss';
import Group from './Group';
import Word from './Word';

const AnimatedBanner = () => {
  const [intervalId, setIntervalId] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const handleAnimated = useCallback(() => {
    setSelectedGroup(1);
    setTimeout(() => {
      setSelectedGroup(2);
    }, 4000);
    setTimeout(() => {
      setSelectedGroup(3);
    }, 8000);
    setTimeout(() => {
      setSelectedGroup(4);
    }, 12000);
  }, []);
  useEffect(() => {
    handleAnimated();
    setIntervalId(
      setInterval(() => {
        handleAnimated();
      }, 16000),
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.fontWrapper}>
          {selectedGroup === 1 && <Word num={1} />}
          {selectedGroup === 2 && <Word num={2} />}
          {selectedGroup === 3 && <Word num={3} />}
          {selectedGroup === 4 && <Word num={4} />}
          <img className={styles.canHelp} src="/img/can-help-font.png" alt="" />
        </div>
        <div className={styles.groupWrapper}>
          {selectedGroup === 1 && <Group num={1} />}
          {selectedGroup === 2 && <Group num={2} />}
          {selectedGroup === 3 && <Group num={3} />}
          {selectedGroup === 4 && <Group num={4} />}
        </div>
      </div>
    </section>
  );
};

export default AnimatedBanner;
