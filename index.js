/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './store';
import { registerRootComponent } from 'expo';

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(ReduxApp);
// AppRegistry.registerComponent(appName, () => ReduxApp);
