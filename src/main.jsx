import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import global_es from '../src/translations/es/global.json';
import global_en from '../src/translations/en/globla.json';

i18n
  .init({
    interpolation: {escapeValue: false},
    lng: "es",
    resources:{
      es: {
        global: global_es
      },
      en: {
        global: global_en
      }
    }
  })
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={ i18n }>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode>, */}
  </I18nextProvider>
)
