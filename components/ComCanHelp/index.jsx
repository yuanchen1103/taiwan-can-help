import React, { useContext } from 'react';
import {
  arrayOf,
  shape,
} from 'prop-types';
import { I18nContext } from '@/i18n/I18nContext';
import styles from './ComCanHelp.scss';

const ComCanHelp = ({ comAssetList = [] }) => {
  const { t } = useContext(I18nContext);

  return (
    <section className={styles.section}>
      <div className={styles.comCanHelpBackground}>
        <img src="/img/com-can-help-bg.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-12 order-2 col-lg-6 order-lg-1 ${styles.colMarginTop}`}>
            <div className="row">
              {comAssetList.map((comAsset, index) => index < 4 && (
                <div className={`col-12 col-sm-6 p-0 ${styles.zIndex1} ${styles.cardBlock}`} key={+index}>
                  <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                      <img src={comAsset.assetPhotoUrl} alt={comAsset.assetOrganization} />
                    </div>
                    <div className={styles.cardTitle}>{comAsset.assetOrganization}</div>
                    <div className={styles.cardContent}>{comAsset.assetContent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`col-12 order-1 col-lg-5 offset-lg-1 order-lg-2 ${styles.colMarginTop}`}>
            <div className="row mt-5">
              <div className={`col-12 ${styles.title}`}>.com</div>
              <div className={`col-12 ${styles.subTitle}`}>CAN HELP</div>
            </div>
            <div className="row">
              <h5 className={`col-12 p-0 ${styles.desciption}`}>{t('comCanHelpDesc')}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ComCanHelp.propTypes = {
  comAssetList: arrayOf(shape()).isRequired,
};

export default ComCanHelp;
