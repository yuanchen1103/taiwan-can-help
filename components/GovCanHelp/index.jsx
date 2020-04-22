import React, {
  useContext,
  useState,
  useEffect,
  forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import FlipMove from 'react-flip-move';
import Swiper from 'react-id-swiper';
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
      <div className={`${styles.card}`}>
        <div className={styles.swiperImage} />
        <div className={styles.cardBlock}>
          <div className={styles.cardTitle}>口罩地圖2.0</div>
          <div className={styles.cardSubTitle}>
            自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。死配花智景半對一快布成小那麼對。
          </div>
        </div>
      </div>
      <div key="2" className={`${styles.card}`}>
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

const MediaAsset = forwardRef(({ mediaAsset }, ref) => (
  <div ref={ref} className={`d-flex ${styles.mediaAsset}`}>
    <div>
      {mediaAsset.assetDate}
      |
      {mediaAsset.assetOrganization}
      {mediaAsset.assetContent}
    </div>
  </div>
));

MediaAsset.propTypes = {
  mediaAsset: PropTypes.objectOf(PropTypes.string).isRequired,
};


const MediaAssetList = () => {
  const mockList = [
    {
      assetContent: '成為口罩國家隊，提供工具機專業技術，使得我國口罩產',
      assetDate: '2020/03/28',
      assetOrganization: '紐約時報1',
      assetLink: 'https://taiwancanhelp.us/',
    },
    {
      assetContent: '成為口罩國家隊，提供工具機專業技術，使得我國口',
      assetDate: '2020/03/28',
      assetOrganization: '紐約時報2',
      assetLink: 'https://taiwancanhelp.us/',
    },
    {
      assetContent: '成為口罩國家隊，提供工具機專業技術，使得我國口罩產量加速成長',
      assetDate: '2020/03/28',
      assetOrganization: '紐約時報3',
      assetLink: 'https://taiwancanhelp.us/',
    },
    {
      assetContent: '成為口罩國家隊，提供工具機專業技術，使得我國口罩產量加速成長',
      assetDate: '2020/03/28',
      assetOrganization: '紐約時報4',
      assetLink: 'https://taiwancanhelp.us/',
    },
    {
      assetContent: '成為口罩國家隊，提供工具機專業技術，使得我國口罩產量加速成長',
      assetDate: '2020/03/28',
      assetOrganization: '紐約時報5',
      assetLink: 'https://taiwancanhelp.us/',
    },
    {
      assetContent: '成為口罩國家隊，提供工具機專業技術，使得我國口罩產量加速成長',
      assetDate: '2020/03/28',
      assetOrganization: '紐約時報6',
      assetLink: 'https://taiwancanhelp.us/',
    },
  ];
  const [mediaAssetList, setMediaAssetList] = useState(mockList);
  useEffect(() => {
    setInterval(() => {
      mediaAssetList.push(mediaAssetList.splice(0, 1)[0]);
      setMediaAssetList([...mediaAssetList]);
    }, 3000);
  }, []);
  return (
    <div className="container">
      <div className={`d-flex align-items-center justify-content-center ${styles.mediaAssetContainer}`}>
        <FlipMove className={styles.width100}>
          {mediaAssetList.map((mediaAsset, index) => index < 4 && (
            <MediaAsset key={mediaAsset.assetOrganization} mediaAsset={mediaAsset} />
          ))}
        </FlipMove>
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
        <MediaAssetList />
      </section>
    </>
  );
};

export default GovCanHelp;
