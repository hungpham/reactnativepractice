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
import TaskList from 'containers/TaskList';
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
				<View style={applicationStyles.mainContent}>
					<TaskList style={styles.list} />
				</View>
			</Image>
		);
	}
}

Home.propTypes = {

};

export default Home;

var styles = StyleSheet.create({
	list: {
		flex: 1
	}
});
