import React, { useEffect, useCallback, useRef } from 'react';
import PropType from 'prop-types';
import cx from 'classnames';
import styles from './AnimatedBanner.scss';

const Word = ({ num }) => {
  const ref = useRef(null);
  const handleAnimated = useCallback(() => {
    const el = ref.current;
    el.classList.add('zoomIn');
    setTimeout(() => {
      el.classList.add('zoomOut');
    }, 3000);
  }, []);
  useEffect(() => {
    handleAnimated();
  }, []);
  return (
    <div className={styles.animatedWord}>
      <img
        ref={ref}
        className={cx('animated')}
        src={`/img/word${num}.png`}
        alt=""
      />
    </div>
  );
};

Word.propTypes = {
  num: PropType.number.isRequired,
};

export default Word;
