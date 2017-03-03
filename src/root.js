/* @flow */

import React, { Component } from 'react';
import {
  View,
  Navigator,
  Text,
  TouchableHighlight,
  Image,
  Alert,
  StyleSheet
} from 'react-native';

import {
  Actions,
  Router,
  Scene,
  ActionConst
} from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from 'config/store';

import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import routes, { listRoutes } from 'config/routes';
import applicationStyles from 'config/applicationStyle';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="SignIn"
      component={SignIn}
      initial={true}
      hideNavBar={true} />
    <Scene
      key="SignUp"
      component={SignUp}
      title="Sign Up"
      hideNavBar={false}
      type={ActionConst.PUSH}
    />
  </Scene>
);

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router
          scenes={scenes}
          titleStyle={{color: 'white'}} backButtonImage={require('assets/images/back.png')}
          navigationBarStyle={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}
        />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar:{
    backgroundColor: 'transparent',
    alignItems: 'center'
  }
});
