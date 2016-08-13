'use-strict';

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Platform } from 'react-native';

import reducer from '../reducers/index';
import BarteguidenApp from './BarteguidenApp';
import BarteguidenNavigator from '../BarteguidenNavigator';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <Provider store={store}>
        {Platform.OS === 'android' ?
          <BarteguidenNavigator>
            <BarteguidenApp />
          </BarteguidenNavigator> : <BarteguidenApp />
        }
      </Provider>
    );
  }
}
