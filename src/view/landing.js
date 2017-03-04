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

export class Landing extends Component {
	constructor(props) {
		super(props);

		this.gotoSignUp = this.gotoSignUp.bind(this);
		this.gotoSignIn = this.gotoSignIn.bind(this);
	}

	gotoSignUp() {
    Actions.SignUp();
  }

	gotoSignIn() {
    Actions.SignIn();
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

				<View style={[applicationStyles.quarterHeight]}>
					<View style={styles.accountintro}>
						<Text style={styles.accountText}>Don't have an account?</Text>
					</View>
					<TouchableOpacity activeOpacity={.5} onPress={this.gotoSignIn}>
						<View style={[applicationStyles.button, styles.signinButton]}>
							<Text style={applicationStyles.buttonText}>Sign In</Text>
						</View>
					</TouchableOpacity>

					<View style={styles.accountintro}>
						<Text style={styles.accountText}>Have an account?</Text>
					</View>
					<TouchableOpacity activeOpacity={.5} onPress={this.gotoSignUp}>
						<View style={[applicationStyles.button, styles.signupButton]}>
							<Text style={applicationStyles.buttonText}>Sign Up</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={[applicationStyles.quarterHeight, styles.copyright]}>
					<View style={styles.accountintro}>
						<Text style={styles.accountText}>Copyright@2017, version 0.0.1</Text>
					</View>
				</View>
			</Image>
		);
	}
}

Landing.propTypes = {

};

export default Landing;

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
