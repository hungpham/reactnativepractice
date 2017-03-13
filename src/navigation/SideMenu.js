import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import { logout } from 'network/API';
import Button from 'components/Button/Button';
import Colors from 'config/colors';
export class SideMenuComponent extends Component {
	constructor() {
		super();
	}

	gotoHome() {
		this.props.closeDrawer();
		Actions.Home();
	}

	gotoUser() {
		this.props.closeDrawer();
		Actions.User();
	}

	gotoLogout() {
		this.props.logout(this.props.user.token).then(() => {

		});
		this.props.closeDrawer();
		Actions.SignIn();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.top}>
					<View style={styles.title}>
						<Text style={styles.titleText}>Task Manager</Text>
					</View>
					<Button
						style={styles.button}
						onPress={() => {
							this.props.closeDrawer();
						}}
						text="Close"
					/>
				</View>
				<View style={styles.list}>
					<View style={styles.seperate} />
					<Button
						onPress={() => {
							this.gotoHome();
						}}
						backgroundColor={Colors.lighBlue}
						text="Task List"
					/>
					{/*
						<Button
						onPress={() => {
							this.gotoUser();
						}}
						backgroundColor={Colors.lighBlue}
						text="User List"
					/>
				*/}

					<View style={styles.seperate} />
					<Button
						onPress={() => {
							this.gotoLogout();
						}}
						backgroundColor={Colors.lighBlue}
						text="Logout"
					/>
				</View>
			</View>
		);
	}
}

SideMenuComponent.propTypes = {
	logout: PropTypes.func,
	user: PropTypes.object
};
// Map Redux state to component props
function mapStateToProps(state) {
	return {
		user: state.userState.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logout: (token) => dispatch(logout(token))
	}
}

const SideMenu = connect(
	mapStateToProps,
	mapDispatchToProps
)(SideMenuComponent);

export default SideMenu;

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	top: {
		flex: .07,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.blue
	},
	button: {
		flex: .4,
		padding: 10
	},
	title: {
		flex: .6,
		alignItems: "stretch"
	},
	titleText: {
		fontSize: 20,
		color: 'white',
		textAlign: "left",
		paddingLeft: 10
	},
	list: {
		flex: 0.7
	},
	seperate: {
		height: 1,
		backgroundColor: Colors.lightGrey
	}
});
