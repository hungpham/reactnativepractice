/* @flow */

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
      <View style={[styles.container, {width: this.props.height, height: this.props.height, borderRadius: this.props.height/2}]}>
        <Image
            style={[styles.icon, {width: this.props.height, height: this.props.height}]}
            source={this.props.imagelink}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 90,
    height: 90
  }
});
