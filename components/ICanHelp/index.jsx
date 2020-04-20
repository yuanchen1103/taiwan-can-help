import React, { useContext } from 'react';
import Swiper from 'react-id-swiper';
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
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          pagination={{
            el: '.swiper-pagination',
          }}
          slidesPerView={3}
          spaceBetween={15}
          activeSlideKey="2"
          centeredSlides
          rebuildOnUpdate
        >
          <div className={styles.swiperCard}><img src="https://cdn.hk01.com/di/media/images/3841315/org/44ab0f3b45047ad890648f9600fe8f28.png/Oyt8V9Yk9zp1_31KxuZa1xI1wavORri5FfXIBRX1yAU?v=w1920" alt="" /></div>
          <div key="2" className={styles.swiperCard}><img src="https://cdn.hk01.com/di/media/images/3841315/org/44ab0f3b45047ad890648f9600fe8f28.png/Oyt8V9Yk9zp1_31KxuZa1xI1wavORri5FfXIBRX1yAU?v=w1920" alt="" /></div>
          <div className={styles.swiperCard}><img src="https://cdn.hk01.com/di/media/images/3841315/org/44ab0f3b45047ad890648f9600fe8f28.png/Oyt8V9Yk9zp1_31KxuZa1xI1wavORri5FfXIBRX1yAU?v=w1920" alt="" /></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ICanHelp;
