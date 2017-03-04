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

import applicationStyles from 'config/applicationStyle';
import { getList } from 'redux/task';

var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

export class TaskList extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		var sources = this.props.tasks || [
			{
				"effort": 300,
				"description": "create task with uuid 2",
				"taskId": "0d12d950-008c-11e7-b5eb-b943e1a9025b"
			},
			{
				"effort": 110,
				"description": "deploy to heroku",
				"taskId": "941a3460-0092-11e7-a4cb-fb8238df415a"
			}
		];
		this.state = {
			dataSource: ds.cloneWithRows(sources),
		}
	}

	componentWillMount() {
		this.props.getList();
	}

	componentDidMount() {
		// this.setState({
		// 	dataSource: this.state.dataSource.cloneWithRows(this.props.tasks)
		// });
	}

	_renderRow(rowData, sectionID, rowID) {
		console.log('rowData', rowData);
		return (
			<TouchableHighlight onPress={() => {

			}}>
				<View>
					<View style={styles.row}>
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
			<Image
				style={applicationStyles.splashScreen}
				source={require('assets/images/bg_home.png')}>
				<View style={[applicationStyles.halfHeight]}>
					{this.props.tasks && <ListView
						dataSource={this.state.dataSource}
						renderRow={this._renderRow}
					renderSeparator={this._renderSeparator}
					/>
					}
				</View>
			</Image>
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

});
