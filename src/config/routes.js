import React from 'react';
import {
  Actions,
  Router,
  Scene,
  ActionConst
} from 'react-native-router-flux';

import NavigationDrawer from 'navigation/NavigationDrawer';
import Home from 'view/home';
import TaskDetail from 'view/taskDetail';
import User from 'view/users';
import Landing from 'view/landing';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';

export const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="Landing"
      component={Landing}
      title="Landing"
      initial={false}
      hideNavBar={true}
      type={ActionConst.PUSH}
    />
    <Scene
      key="Home"
      component={Home}
      title="Home"
      hideNavBar={true}
      initial={true}
      type={ActionConst.PUSH}
    />
    <Scene
      key="TaskDetail"
      component={TaskDetail}
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
      initial={false}
      hideNavBar={false} />
    <Scene
      key="SignUp"
      component={SignUp}
      title="Sign Up"
      initial={false}
      hideNavBar={false}
      type={ActionConst.PUSH}
    />
  </Scene>
);