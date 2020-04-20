import React, { useEffect, useState, useContext } from 'react';
import Swiper from 'react-id-swiper';
import { debounce } from 'lodash';
import { I18nContext } from '@/i18n/I18nContext';
import styles from './GovCanHelp.scss';

// 輪播連結
const Carousel = () => {
  // 依照螢幕尺寸顯示每列顯示數量
  const [slidesPerView, setSlidesPerView] = useState();
  // 依照螢幕尺寸顯示3種顯示排版
  const renderSlidesPerView = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) return 3;
    if (windowWidth > 576) return 2;
    return 1;
  };
  // 螢幕尺寸變動時觸發監聽事件
  const resizeEvent = () => {
    const currentSlidesPerView = renderSlidesPerView();
    if (currentSlidesPerView !== slidesPerView) {
      setSlidesPerView(currentSlidesPerView);
    }
  };
  useEffect(() => {
    // mounted階段初始化監聽
    setSlidesPerView(renderSlidesPerView());
    const resizeEventHandler = debounce(resizeEvent, 300);
    window.addEventListener('resize', resizeEventHandler);
    return () => window.removeEventListener('resize', resizeEventHandler);
  }, []);

  // 改放loader
  if (!slidesPerView) return null;
  return (
    <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      slidesPerView={slidesPerView}
      spaceBetween={slidesPerView === 1 ? 20 : 30}
      centeredSlides={slidesPerView === 1}
      rebuildOnUpdate
    >
      <div className={`${styles.card}`}>
        <div className={styles.swiperImage} />
        <div className={styles.cardBlock}>
          <div className={styles.cardTitle}>口罩地圖2.0</div>
          <div className={styles.cardSubTitle}>
            自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。死配花智景半對一快布成小那麼對。
          </div>
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div className={styles.swiperImage} />
        <div className={styles.cardBlock}>
          <div className={styles.cardTitle}>口罩地圖2.0</div>
          <div className={styles.cardSubTitle}>
            自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。死配花智景半對一快布成小那麼對。
          </div>
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div className={styles.swiperImage} />
        <div className={styles.cardBlock}>
          <div className={styles.cardTitle}>口罩地圖2.0</div>
          <div className={styles.cardSubTitle}>
            自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。
          </div>
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div className={styles.swiperImage} />
        <div className={styles.cardBlock}>
          <div className={styles.cardTitle}>口罩地圖2.0</div>
          <div className={styles.cardSubTitle}>
            自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。
          </div>
        </div>
      </div>
    </Swiper>
  );
};

const Blockquote = () => {
  const blockquoteList = [
    '2020/01/30 發現武漢肺炎，政府開始動起來。',
    '2020/01/30 發現武漢肺炎，政府開始動起來。',
    '2020/01/30 發現武漢肺炎，政府開始動起來。',
    '2020/01/30 發現武漢肺炎，政府開始動起來。2020/01/30 發現',
  ];
  return (
    <div className="container">
      <div className="row">
        {blockquoteList.map((blockquote, index) => (
          <div key={+index} className={`d-flex ${styles.blockquote}`}>
            <div>{blockquote}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GovCanHelp = () => {
  const { t } = useContext(I18nContext);
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-12 order-1 col-md-7 order-md-2">
              <div className={styles.govCanHelpBackground} />
            </div>
            <div className="col-12 order-2 col-md-5 order-md-1 d-flex align-items-end flex-wrap">
              <div className="container">
                <div className="row mt-5">
                  <div className={`col-12 ${styles.title}`}>.gov</div>
                  <div className={`col-12 ${styles.subTitle}`}>CAN HELP</div>
                </div>
                <div className="row">
                  <h5 className={`col-12 p-0 ${styles.desciption}`}>{t('govCanHelpDesc')}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`container ${styles.carouselContainer}`}>
          <Carousel />
        </div>
      </section>
      <section className={styles.section}>
        <Blockquote />
      </section>
    </>
  );
};

export default GovCanHelp;
