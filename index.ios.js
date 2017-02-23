/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

import CircleImageView from 'components/Circle';
import Signin from 'containers/Signin';

export default class Practice1 extends Component {
  render() {
    return (
      <Signin styles={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  }
});

AppRegistry.registerComponent('Practice1', () => Practice1);
