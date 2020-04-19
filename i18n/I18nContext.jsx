import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { reducer, initialState } from './reducer';

export const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
