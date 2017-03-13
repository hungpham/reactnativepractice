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

import NavigationDrawer from 'navigation/NavigationDrawer';
import Home from 'view/home';
import TaskDetailView from 'view/taskDetail';
import User from 'view/users';
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
          <Scene
            key="drawer"
            component={NavigationDrawer}
            open={false}
          >
            <Scene key="main" tabs={true} >
              <Scene key="root">
                <Scene
                  key="Landing"
                  component={Landing}
                  title="Landing"
                  hideNavBar={true}
                  type={ActionConst.PUSH}
                  initial
                />
                <Scene
                  key="Home"
                  component={Home}
                  title="Home"
                  hideNavBar={true}
                  type={ActionConst.PUSH}
                />
                <Scene
                  key="TaskDetail"
                  component={TaskDetailView}
                  title="Task Detail"
                  hideNavBar={true}
                  type={ActionConst.PUSH}
                />
                <Scene
                  key="User"
                  component={User}
                  title="User"
                  hideNavBar={true}
                  type={ActionConst.PUSH}
                />
                <Scene
                  key="SignIn"
                  component={SignIn}
                  hideNavBar={false}
                />
                <Scene
                  key="SignUp"
                  component={SignUp}
                  title="Sign Up"
                  hideNavBar={false}
                  type={ActionConst.PUSH}
                />
              </Scene>
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
