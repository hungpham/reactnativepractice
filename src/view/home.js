/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View,
	TouchableOpacity,
	Alert,
	ActivityIndicator
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';

import CircleImageView from 'components/CircleImageView/CircleImageView';
import CustomTextInput from 'components/CustomTextInput/CustomTextInput';
import applicationStyles from 'config/applicationStyle';
import Colors from 'config/colors';

export class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Image
				style={applicationStyles.splashScreen}
				source={require('assets/images/bg_home-1.png')}>
				<View style={applicationStyles.halfHeight}>
					<CircleImageView
						height={120}
						imagelink={require('assets/images/task-icon.png')}
					/>
					<Text style={styles.welcomeText}>Welcome to TaskManager</Text>
				</View>
			</Image>
		);
	}
}

Home.propTypes = {

};

export default Home;

var styles = StyleSheet.create({
	welcomeText: {
		color: Colors.translucentBlack,
		fontSize: 28,
		fontWeight: '200',
		backgroundColor: Colors.transparent,
    textAlign: 'center',
    lineHeight: 26,
		padding: 10
	},
	signinButton: {
    backgroundColor: Colors.blue,
		marginBottom: 10,
  },
	signupButton: {
    backgroundColor: Colors.lighBlue,
		marginBottom: 10,
  },
	accountintro: {
		flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
	},
	accountText: {
		justifyContent: 'center',
		color: Colors.lightGrey,
    backgroundColor: Colors.transparent
	},
	copyright: {
		flex: 0.1,
		justifyContent: 'flex-end'
	}
});
