import { HashRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import storeService from 'src/lib/services/store';
import Routes from 'src/pages/Routes';

import 'normalize.css';
import 'src/ui/styles/base/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.setAttribute('id', 'root');

  ReactDOM.render(
    <Provider store={ storeService.getStore() }>
      <PersistGate loading={ null } persistor={ storeService.getPersistor() }>
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>,
    document.body.appendChild(el),
  );
});
