import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
	Image
} from 'react-native';

export default class CircleImageView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('assets/images/check_red.png')}  style={styles.logo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 60,
    height: 60
  }
});