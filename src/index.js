import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { store, persistor } from './components/redux/store';
import './index.css';

import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode> 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
