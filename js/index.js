import React, { Component } from 'react';
import { Provider } from 'react-redux'

import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import { colors } from './config/styles'
import Router from './navigation/routes'
import { Store } from  './redux/store'

import {
  
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
})

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
            navigatorUID="root"
            id="root"
            initialRoute={Router.getRoute('navigation')}
           />
        </NavigationProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

