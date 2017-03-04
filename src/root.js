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

import Styles from 'navigation/Styles/NavigationContainerStyle'
import NavItems from 'navigation/NavItems'
// import CustomNavBar from 'navigation/CustomNavBar'
import NavigationDrawer from 'navigation/NavigationDrawer';

import Home from 'view/home';
import Landing from 'view/landing';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import routes, { listRoutes } from 'config/routes';
import applicationStyles from 'config/applicationStyle';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router
          titleStyle={{ color: 'white' }} backButtonImage={require('assets/images/back.png')}
          navigationBarStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent' }}
        >
          <Scene key='drawer' component={NavigationDrawer} open={false}>
            <Scene
              key='drawerChildrenWrapper'
              navigationBarStyle={Styles.navBar}
              titleStyle={Styles.title}
              leftButtonIconStyle={Styles.leftButton}
              rightButtonTextStyle={Styles.rightButton}
            >
              <Scene
                key="Landing"
                component={Landing}
                title="Home"
                initial={false}
                hideNavBar
                type={ActionConst.PUSH}
                renderLeftButton={NavItems.hamburgerButton}
              />
              <Scene
                key="Home"
                component={Home}
                title="Home"
                initial
                hideNavBar
                renderLeftButton={NavItems.hamburgerButton}
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
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: 'transparent',
    alignItems: 'center'
  }
});
