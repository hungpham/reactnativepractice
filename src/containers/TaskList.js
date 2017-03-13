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

export class TaskList extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		var sources = this.props.tasks || [];
		this.state = {
			dataSource: ds.cloneWithRows(sources),
		}
	}

	componentDidMount() {
		this.props.getList().then(() => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(this.props.tasks)
			});
		});
	}

	_genRows(pressData) {
		var dataBlob = [];
		for (var ii = 0; ii < 100; ii++) {
			var pressedText = pressData[ii] ? ' (pressed)' : '';
			dataBlob.push('Row ' + ii + pressedText);
		}
		return dataBlob;
	}

	_renderRow(rowData, sectionID, rowID) {
		return (
			<TouchableHighlight
				onPress={() => {
					Actions.TaskDetail({task: rowData});
				}}
				activeOpacity={0.5}
				underlayColor={Colors.transparentWhite50}
			>
				<View style={styles.item}>
					<View style={styles.avatar}>
						<CircleImageView
							height={64}
							width={64}
							imagelink={require('assets/images/avatar.png')} />
					</View>
					<View style={styles.itemInfo}>
						<Text style={styles.description}>
							{rowData.description}
						</Text>
						<Text style={styles.effort}>
							Effort: ${rowData.effort}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

	_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
		return (
			<View
				key={`${sectionID}-${rowID}`}
				style={{
					height: adjacentRowHighlighted ? 4 : 1,
					backgroundColor: adjacentRowHighlighted ? Colors.lightGrey : Colors.veryLightGrey,
				}}
			/>
		);
	}

	render() {
		return (
			<View style={[styles.container]}>
				{this.props.tasks && <ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
					renderSeparator={this._renderSeparator}
					enableEmptySections={true}
				/>
				}
				{!this.props.tasks && <ActivityIndicator
					style={[styles.loader]}
					color='white'
					size='large' />
				}
			</View>
		);
	}
}

TaskList.propTypes = {
	getList: PropTypes.func,
	error: PropTypes.string,
	loading: PropTypes.bool,
	tasks: PropTypes.array
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskList);

var styles = StyleSheet.create({
	container: {
		marginTop: 60,
		padding: 20,
		flex: 1,
		backgroundColor: Colors.transparentWhite75
	},
	items: {

	},
	item: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 10,
		padding: 10,
		alignItems: 'center'
	},
	avatar: {
		flex: 0.3
	},
	itemInfo: {
		flex: 0.7
	},
	description: {
		fontSize: 20
	},
	effort: {
		fontSize: 24,
		color: Colors.lightGrey,
		fontStyle: 'italic'
	}
});
