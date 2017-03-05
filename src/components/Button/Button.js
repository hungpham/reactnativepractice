import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import applicationStyles from 'config/applicationStyle';
import Colors from 'config/colors';
export default class Button extends Component {
	render() {
		return (
			<TouchableHighlight
				style={[applicationStyles.button, {backgroundColor: this.props.backgroundColor}]}
				underlayColor="#B5B5B5"
				onPress={() => {
					this.props.onPress();
				}}>
				<Text style={applicationStyles.buttonText}>{this.props.text}</Text>
			</TouchableHighlight>
		)
	}
}

Button.propsType = {
	backgroundColor: React.PropTypes.string
}

Button.defaultProps = {
	backgroundColor: Colors.blue
}
