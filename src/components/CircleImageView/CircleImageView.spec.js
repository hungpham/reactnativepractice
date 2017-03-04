import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import CircleImageView from './CircleImageView';

it('CircleImageView renders correctly', () => {
  const tree = renderer.create(
    <CircleImageView />
  ).toJSON();
	expect(tree).toMatchSnapshot()
});
