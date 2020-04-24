import React, { useContext } from 'react';
import { shape, arrayOf } from 'prop-types';
import Swiper from 'react-id-swiper';
import { I18nContext } from '@/i18n/I18nContext';
import styles from './ICanHelp.scss';


const ICanHelp = ({ icanAssetList = [] }) => {
  const { t } = useContext(I18nContext);
  return (
    <section className={styles.section}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-12 ${styles.title}`}>I CAN HELP</div>
          <div className={`col-12 ${styles.desciption}`}>{t('iCanHelpDesc')}</div>
        </div>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          pagination={{
            el: '.swiper-pagination',
          }}
          slidesPerView={3}
          spaceBetween={15}
          activeSlideKey="1"
          centeredSlides
          rebuildOnUpdate
        >
          {icanAssetList.map((icanAsset, index) => (
            <a key={index.toString()} href={icanAsset.assetLink} title={icanAsset.assetName} target="_blank" rel="noopener noreferrer">
              <div className={styles.swiperCard}>
                <img src={icanAsset.assetPhotoUrl} alt={icanAsset.assetName} />
              </div>
            </a>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

ICanHelp.propTypes = {
  icanAssetList: arrayOf(shape()).isRequired,
};

export default ICanHelp;
