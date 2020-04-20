import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <img src="/img/logo.svg" alt="logo" />
    <div className={styles.social}>
      <div className="addthis_inline_share_toolbox" />
    </div>
  </footer>
);

export default Footer;
