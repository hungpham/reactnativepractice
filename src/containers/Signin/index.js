/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

import CircleImageView from 'components/Circle';
import TextInputIcon from 'components/TextInputIcon';

export default class Signin extends Component {
  render() {
    return (
      <Image source={require('assets/images/bg_signin.png')} style={styles.container}>
        <View style={[styles.half, styles.logo]}>
          <CircleImageView/>
        </View>
        <View style={styles.quarter}>
          <TextInputIcon
						iconSrc={require("assets/images/user_name.png")}
						label="User name"
						inputName="username"
						type="text"
					/>
          <TextInputIcon
						iconSrc={require("assets/images/password.png")}
						label="Password"
						inputName="password"
						type="password"
					/>
        </View>
        <View style={styles.quarter}>
          <Text style={styles.text}>
            form button submit
          </Text>
          <Text style={styles.text}>
            Don't have account'
          </Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },

  half: {
    flex: 0.5,
    borderBottomWidth: 1,
    borderColor: 'red'
  },
  quarter: {
    flex: 0.25,
    borderBottomWidth: 1,
    borderColor: 'red'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  formLogin: {
    flex: 0.3,
    backgroundColor: 'red'
  },
  formFooter: {
    flex: 0.2,
    backgroundColor: 'gold'
  },
  welcome: {
    flex: 0.5,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    color: '#ff0000',
    height: 40,
    width: 100
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'transparent'
  },
});