import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
	Actions
} from 'react-native-router-flux';

import Button from 'components/Button/Button';
import Colors from 'config/colors';
export default class SideMenu extends Component {
	constructor() {
		super();
	}

	gotoHome() {
		this.props.closeDrawer();
		Actions.Home();
	}

	gotoLogout() {
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
