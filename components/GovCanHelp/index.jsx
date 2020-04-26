import React, {
  useContext,
  useState,
  useEffect,
  forwardRef,
} from 'react';
import {
  arrayOf,
  shape,
} from 'prop-types';
import { debounce } from 'lodash';
import FlipMove from 'react-flip-move';
import Swiper from 'react-id-swiper';
import { I18nContext } from '@/i18n/I18nContext';
import styles from './GovCanHelp.scss';

// 輪播連結
const Carousel = ({ govAssetList = [] }) => {
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
  });
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
      activeSlideKey={slidesPerView === 3 ? null : '2'} // 在768px以下的螢幕尺寸時會自動更新為從第二項目開始，大於768px以上則從第一項開始
      rebuildOnUpdate
    >
      {govAssetList.map((govAsset, index) => (
        <a key={index.toString()} href={govAsset.assetLink} target="_blank" rel="noopener noreferrer">
          <div className={`${styles.card}`}>
            {/* <div className={styles.swiperImage}>
              <img src={govAsset.assetPhotoUrl} alt={govAsset.assetName} />
            </div> */}
            <div className={styles.cardBlock}>
              <div className={styles.cardTitle}>{govAsset.assetName}</div>
              <div className={styles.cardSubTitle}>{govAsset.assetIntro}</div>
            </div>
          </div>
        </a>
      ))}
    </Swiper>
  );
};

Carousel.propTypes = {
  govAssetList: arrayOf(shape()).isRequired,
};

const MediaAsset = forwardRef(({ mediaAsset }, ref) => (
  <div ref={ref} className={`d-flex ${styles.mediaAsset}`}>
    <a href={mediaAsset.assetLink} target="_blank" rel="noopener noreferrer">
      <div>
        {mediaAsset.assetDate}
        &nbsp;|&nbsp;
        {mediaAsset.assetOrganization}
        {mediaAsset.assetContent}
      </div>
    </a>
  </div>
));

MediaAsset.propTypes = {
  mediaAsset: shape().isRequired,
};


const MediaAssetList = ({ mediaAssetList = [] }) => {
  const addKeyAssetList = mediaAssetList.map(({ assetDate, ...asset }, key) => ({
    ...asset,
    key: key.toString(),
    assetDate: new Date(assetDate).toLocaleDateString(),
  }));
  const [assetList, setAssetList] = useState(addKeyAssetList);
  const setintervalAnimation = () => {
    setTimeout(() => {
      assetList.push(assetList.splice(0, 1)[0]);
      setAssetList([...assetList]);
      setintervalAnimation();
    }, 3000);
  };
  useEffect(() => {
    setintervalAnimation();
  }, []);
  return (
    <div className="container">
      <div className={`d-flex align-items-center justify-content-center ${styles.mediaAssetContainer}`}>
        <div className={styles.mediaAssetFlipMove}>
          <FlipMove className={`${styles.width100}`}>
            {assetList.map((mediaAsset, index) => index < 4 && (
              <MediaAsset key={mediaAsset.key} mediaAsset={mediaAsset} />
            ))}
          </FlipMove>
        </div>
      </div>
    </div>
  );
};

MediaAssetList.propTypes = {
  mediaAssetList: arrayOf(shape()).isRequired,
};

const GovCanHelp = ({ govAssetList = [], mediaAssetList = [] }) => {
  const { t } = useContext(I18nContext);
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-12 order-1 col-md-7 order-md-2">
              <div className={styles.govCanHelpBackground}>
                <img src="/img/gov-can-help-bg.png" alt="" />
              </div>
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
          {!!govAssetList.length && <Carousel govAssetList={govAssetList} />}
        </div>
      </section>
      <section className={styles.section}>
        {!!mediaAssetList.length && <MediaAssetList mediaAssetList={mediaAssetList} />}
      </section>
    </>
  );
};

GovCanHelp.propTypes = {
  govAssetList: arrayOf(shape()).isRequired,
  mediaAssetList: arrayOf(shape()).isRequired,
};

export default GovCanHelp;
