import React from 'react';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';

const routes = {
  getSignInRoute(navigator) {
    return <SignIn navigator={navigator} />;
  },
  getSignUpRoute(navigator) {
    return <SignUp navigator={navigator} />;
  }
};

export default routes;

export const listRoutes = [{id: 'signin', title: 'Sign In'},
                {id: 'signup', title: 'Sign Up'}];
