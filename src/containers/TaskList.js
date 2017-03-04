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
import Colors from 'config/colors';
import applicationStyles from 'config/applicationStyle';
import { getList } from 'redux/task';

var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

export class TaskList extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		var sources = this.props.tasks || [];
		this.state = {
			dataSource: ds.cloneWithRows(sources),
		}
	}

	componentWillMount() {
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
			<TouchableHighlight onPress={() => {

			}}>
				<View>
					<View style={styles.item}>
						<Text>
							{rowData.description}
						</Text>
						<Text>
							{rowData.effort}
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
					backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
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
		getList: (userCredentials) => dispatch(getList(userCredentials))
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
		backgroundColor: Colors.transparentWhite20
	},
	items: {

	},
	item: {
		marginBottom: 10,
		padding: 10,
	}
});
