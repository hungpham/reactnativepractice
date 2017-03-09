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
import TaskDetail from 'containers/TaskDetail';
import applicationStyles from 'config/applicationStyle';
import Colors from 'config/colors';

export class TaskDetailView extends Component {
	constructor(props) {
		super(props);
	}

	openDrawer() {
		Actions.refresh({ key: 'drawer', open: value => !value });
	}

	render() {
		const { task } = this.props;
		return (
			<Image
				style={applicationStyles.splashScreen}
				source={require('assets/images/bg_home-1.png')}>
				<Button
					onPress={() => {
						Actions.pop();
					}}
					text="Back to List"
				/>
				<TaskDetail task={task} style={styles.list} />
			</Image>
		);
	}
}

TaskDetailView.propTypes = {
	task: React.PropTypes.object
};

export default TaskDetailView;

var styles = StyleSheet.create({
	list: {
		flex: 1
	}
});
