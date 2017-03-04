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

import Home from 'view/home';
import Landing from 'view/landing';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import routes, { listRoutes } from 'config/routes';
import applicationStyles from 'config/applicationStyle';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="Landing"
      component={Landing}
      title="Home"
      initial={false}
      hideNavBar={true}
      type={ActionConst.PUSH}
    />
    <Scene
      key="Home"
      component={Home}
      title="Home"
      initial={true}
      hideNavBar={true}
      type={ActionConst.PUSH}
    />
    <Scene
      key="SignIn"
      component={SignIn}
      hideNavBar={false} />
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
