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
import Button from 'components/Button/Button';
import UserList from 'containers/UserList';
import applicationStyles from 'config/applicationStyle';
import Colors from 'config/colors';

export class User extends Component {
	constructor(props) {
		super(props);
	}

	openDrawer() {
		Actions.refresh({ key: 'drawer', open: value => !value });
	}

	render() {
		return (
			<Image
				style={applicationStyles.splashScreen}
				source={require('assets/images/bg_home-1.png')}>
				<Button
					onPress={this.openDrawer.bind(this)}
					text="Open Menu User"
				/>
				<View style={applicationStyles.mainContent}>
					<UserList style={styles.list} />
				</View>
			</Image>
		);
	}
}

User.propTypes = {

};

export default User;

var styles = StyleSheet.create({
	list: {
		flex: 1
	}
});
