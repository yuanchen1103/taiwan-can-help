import React, { useEffect, useRef, useCallback } from 'react';
import cx from 'classnames';
import PropType from 'prop-types';
import styles from './AnimatedBanner.scss';

const Group = ({ num }) => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const handleAnimated = useCallback(() => {
    const el1 = img1Ref.current;
    const el2 = img2Ref.current;
    const el3 = img3Ref.current;
    el1.classList.add('zoomIn', styles.imgShow);
    setTimeout(() => {
      el2.classList.add('zoomIn', styles.imgShow);
    }, 400);
    setTimeout(() => {
      el3.classList.add('zoomIn', styles.imgShow);
    }, 500);
    setTimeout(() => {
      el1.classList.add('zoomOut');
      el1.classList.add('zoomOut');
    }, 3000);
    setTimeout(() => {
      el2.classList.add('zoomOut');
    }, 3400);
    setTimeout(() => {
      el3.classList.add('zoomOut');
    }, 3500);
  }, []);
  useEffect(() => {
    // handleAnimated();
  }, []);
  return (
    <div className={styles[`group${num}`]}>
      <img
        ref={img1Ref}
        className={cx(styles[`group${num}1`], 'animated')}
        src={`/img/${num}-1.png`}
        alt=""
      />
      <img
        ref={img2Ref}
        className={cx(styles[`group${num}2`], 'animated')}
        src={`/img/${num}-2.png`}
        alt=""
      />
      <img
        ref={img3Ref}
        className={cx(styles[`group${num}3`], 'animated')}
        src={`/img/${num}-3.png`}
        alt=""
      />
    </div>
  );
};

Group.propTypes = {
  num: PropType.number.isRequired,
};

export default Group;
