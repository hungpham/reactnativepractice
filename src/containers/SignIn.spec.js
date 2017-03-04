import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import SignInContainer from './SignIn';
import { INITIAL_STATE, signInReducer } from 'redux/signin';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
describe('<SignIn />', () => {
  it('renders with default props', () => {
    const store = mockStore({signInReducer: INITIAL_STATE });
    const wrapper = shallow(
      <SignInContainer store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});