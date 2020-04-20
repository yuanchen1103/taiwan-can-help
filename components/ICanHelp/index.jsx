import React, { useContext } from 'react';
import { I18nContext } from '@/i18n/I18nContext';
import styles from './ICanHelp.scss';


const ICanHelp = () => {
  const { t } = useContext(I18nContext);
  return (
    <section className={styles.section}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-12 ${styles.title}`}>I CAN HELP</div>
          <div className={`col-12 ${styles.desciption}`}>{t('iCanHelpDesc')}</div>
        </div>
        <div className="row">

        </div>
      </div>
    </section>
  );
};

export default ICanHelp;
