/* @flow */
// export const a = 2;
// export const b = 3;
// const c = 4;
// export default c;

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import applicationStyles from 'config/applicationStyle';

export default class SignUp extends Component {
  render() {
    return (
      <Image
         style={applicationStyles.splashScreen}
         source={require('assets/images/bg_signup.png')}>
      <View style={styles.container}>
        <Text>I'm the SignUp screen</Text>
      </View>
    </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
