import zh from '@/public/static/locales/zh';
import en from '@/public/static/locales/en';

export const i18n = {
  zh,
  en
};

const getTranslate = langCode => key => i18n[langCode][key] || key;

export const initialState = {
  langCode: 'zh',
  t: getTranslate('zh')
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
