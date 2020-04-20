import zhTW from '@/public/static/locales/zh-TW/index.json';
import enUS from '@/public/static/locales/en-US/index.json';

export const i18n = {
  'zh-TW': zhTW,
  'en-US': enUS,
};

const getTranslate = (langCode) => (key) => i18n[langCode][key] || key;

export const initialState = {
  langCode: 'zh-TW',
  t: getTranslate('zh-TW'),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setLanguage':
      return {
        langCode: action.payload,
        translate: getTranslate(action.payload),
      };
    default:
      return { ...initialState };
  }
};
