import React from 'react';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

import { rootReducer } from '../storage/redux/reducers/root-reducer';
// import { actionFireLogger } from '../storage/redux/middlewares/logger';
import {Header} from '../core/components/header/header';
import {Router} from './router';

const store = createStore(rootReducer);

function EntryPoint() {
  return (
    <Provider store={store}>
      <Header />
      <Router />
    </Provider>
  );
}

export default EntryPoint;
