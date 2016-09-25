'use-strict';

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Platform, AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducer from '../reducers/index';

import ApplicationTabs from './ApplicationTabs';
import ApplicationCardStack from './ApplicationCardStack';

const PushNotification = require('react-native-push-notification');

PushNotification.configure({
  onNotification: () => {},
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducer, undefined, autoRehydrate());
persistStore(store, {
  blacklist: ['tabNavigation', 'cardStackNavigation'],
  storage: AsyncStorage,
});

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <Provider store={store}>
        {Platform.OS === 'android' ?
          <ApplicationCardStack />
          : <ApplicationTabs />
        }
      </Provider>
    );
  }
}
