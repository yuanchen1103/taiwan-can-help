import React, { useContext } from 'react';
import { I18nContext } from '@/i18n/I18nContext';
import styles from './ComCanHelp.scss';

const ComCanHelp = () => {
  const { t } = useContext(I18nContext);
  const mockList = [
    {
      photo: '',
      title: '哈伯精密',
      content: '自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。',
    },
    {
      photo: '',
      title: '哈伯精密',
      content: '自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。',
    },
    {
      photo: '',
      title: '哈伯精密',
      content: '自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。',
    },
    {
      photo: '',
      title: '哈伯精密',
      content: '自什務條民教事表類時加太。與全打年文起縣環前候吃住究燈灣：死配花智景半對一快布成小那麼對。',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.comCanHelpBackground} />
      <div className="container">
        <div className="row">
          <div className={`col-12 order-2 col-lg-6 order-lg-1 ${styles.colMarginTop}`}>
            <div className="row">
              {mockList.map((mock, index) => (
                <div className={`col-12 col-sm-6 p-0 ${styles.zIndex1} ${styles.cardBlock}`} key={+index}>
                  <div className={styles.card}>
                    <div className={styles.cardPhoto} />
                    <div className={styles.cardTitle}>{mock.title}</div>
                    <div className={styles.cardContent}>{mock.content}</div>
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

export default ComCanHelp;
