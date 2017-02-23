import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

export default class CircleImageView extends Component {
	render() {
		return (
			<View style={styles.container}>
				Image Android
				<Image source={require('assets/images/check_red.png')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});