import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import CustomTextInput from './CustomTextInput';

it('CustomTextInput renders correctly', () => {
  const tree = renderer.create(
    <CustomTextInput
			autoCapitalize={'none'}
			keyboardType={'email-address'}
			placeholder={'UserName'}
			imageIcon={require('assets/images/user_name.png')}
		/>
  ).toJSON();
	expect(tree).toMatchSnapshot()
});

it('CustomTextInput renders correctly with placeholderTextColor', () => {
  const tree = renderer.create(
    <CustomTextInput
			placeholderTextColor={'#ff0000'}
			imageIcon={require('assets/images/user_name.png')}
		/>
  ).toJSON();
	expect(tree).toMatchSnapshot()
});
