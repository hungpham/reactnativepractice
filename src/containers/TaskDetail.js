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
	ListView,
	ListViewDataSource,
	TouchableOpacity,
	Alert,
	ActivityIndicator,
	TouchableHighlight
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import CircleImageView from 'components/CircleImageView/CircleImageView';
import Colors from 'config/colors';
import applicationStyles from 'config/applicationStyle';
import { geTasktList } from 'network/API';

export class TaskDetail extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		var sources = this.props.tasks || [];
		this.state = {
			dataSource: ds.cloneWithRows(sources),
		}
	}

	render() {
		const { description, effort } = this.props.task;
		return (
			<View style={[styles.container]}>
				<View style={applicationStyles.quarterHeightWithLogo}>
					<View style={styles.title}>
						<Text style={styles.titleText}>Task Detail</Text>
					</View>
					<View style={styles.avatar}>
						<CircleImageView
							height={120}
							width={120}
							imagelink={require('assets/images/avatar.png')} />
					</View>
				</View>
				<View style={[applicationStyles.halfHeight, { 'alignItems': 'flex-start', }]}>
					<View style={styles.mainContent}>

						<View style={styles.detail}>
							<Text style={styles.description}>{description}</Text>
							<Text style={styles.effort}>Effort: ${effort}</Text>
						</View>
					</View>
				</View>

			</View>
		);
	}
}

TaskDetail.propTypes = {
	task: React.PropTypes.object
};

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		error: state.taskState.error,
		loading: state.taskState.loading,
		tasks: state.taskState.tasks
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		getList: (userCredentials) => dispatch(geTasktList(userCredentials))
	}
}

const connectTaskDetail = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskDetail);

export default TaskDetail;

var styles = StyleSheet.create({
	container: {
		marginTop: 60,
		padding: 20,
		flex: 1,
		backgroundColor: Colors.transparentWhite75
	},
	mainContent: {
		flex: 1,
		justifyContent: 'flex-start',
		alignSelf: 'center',
	},
	title: {
		alignSelf: 'center'
	},
	detail: {
		alignSelf: 'center'
	},
	titleText: {
		color: Colors.blue,
		fontSize: 30
	},
	description: {
		fontSize: 20,
		alignSelf: 'center'
	},
	effort: {
		fontSize: 24,
		color: Colors.blue,
		fontStyle: 'italic',
		alignSelf: 'center'
	}
});
