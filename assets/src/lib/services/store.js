import { applyMiddleware, compose, createStore } from 'redux';
import immutableTransform from 'redux-persist-transform-immutable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducers from 'src/lib/reducers';

class Store {
  constructor() {
    this._setStore();
    this.persistor = persistStore(this.store);
  }

  clearStore() {
    return this.persistor.flush();
  }

  getPersistor() {
    return this.persistor;
  }

  getStore() {
    return this.store;
  }

  // private

  _buildPersistedReducer() {
    return persistReducer(
      {
        key        : 'root',
        storage,
        transforms : [immutableTransform()],
      },
      reducers,
    );
  }

  _setStore() {
    const persistedReducer = this._buildPersistedReducer();
    const middlewares = [applyMiddleware(thunk)];

    this.store = createStore(
      persistedReducer,
      {}, // initial state
      compose(...middlewares),
    );
  }
}

export default new Store();
