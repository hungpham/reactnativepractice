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
import { getUserList } from 'network/API';


export class UserList extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		var sources = this.props.users || [];
		this.state = {
			dataSource: ds.cloneWithRows(sources),
		}
	}

	componentDidMount() {
		this.props.getList(this.props.user.token).then(() => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(this.props.users)
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
							{rowData.full_name}
						</Text>
						<Text style={styles.email}>
							{rowData.email}
						</Text>
						<Text style={styles.birthday}>
							{rowData.birthday}
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
				{this.props.users && <ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
					renderSeparator={this._renderSeparator}
					enableEmptySections={true}
				/>
				}
				{!this.props.users && <ActivityIndicator
					style={[styles.loader]}
					color='white'
					size='large' />
				}
			</View>
		);
	}
}

UserList.propTypes = {
	getList: PropTypes.func,
	error: PropTypes.string,
	loading: PropTypes.bool,
	user: PropTypes.object,
	users: PropTypes.array
};

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		error: state.userState.error,
		loading: state.userState.loading,
		user: state.userState.user,
		users: state.userState.users
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		getList: (token) => dispatch(getUserList(token))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);

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
	},
	email: {
		fontSize: 14,
		color: Colors.lightGrey,
		fontStyle: 'italic'
	},
	birthday: {
		fontSize: 12,
		color: Colors.lightGrey,
		fontStyle: 'italic'
	}
});