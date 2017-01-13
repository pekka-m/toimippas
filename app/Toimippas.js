import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './components/app/AppContainer';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('Toimippas', () => App);
