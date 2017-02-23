/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View
} from 'react-native';

export default class TextInputIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
		const { iconSrc, label, inputName } = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.icon}>
            <Image
              source={iconSrc}
            />
          </View>
          <TextInput
						style={styles.input}
						placeholder={label}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
					/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: null,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: 'transparent',
  },
  icon: {
    height: 40,
    width: 40,
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: 40,
    borderWidth: 0,
    color: 'white',
    flex: 0.9
  },
});