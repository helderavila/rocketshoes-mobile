import React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
}
