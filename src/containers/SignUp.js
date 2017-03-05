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
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import { signup } from 'network/API';
import CircleImageView from 'components/CircleImageView/CircleImageView';
import CustomTextInput from 'components/CustomTextInput/CustomTextInput';
import applicationStyles from 'config/applicationStyle';
import Colors from 'config/colors';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: ''
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.gotoSignIn = this.gotoSignIn.bind(this);
  }

  handleSignUp() {
    this.props.signup({
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    });
  }

  gotoSignIn() {
    Actions.SignIn();
  }

  checkToRenderLoading() {
    if (this.props.loading) {
      return (
        <ActivityIndicator
          style={[styles.loader]}
          color='white'
          size='large' />
      );
    }
    return (
      <TouchableOpacity activeOpacity={.5} onPress={this.handleSignUp}>
        <View style={styles.SignUpButton}>
          <Text style={styles.SignUpText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Image
        style={applicationStyles.splashScreen}
        source={require('assets/images/bg_signup.png')}>
        <View style={applicationStyles.quarterHeightWithLogo}>
          <CircleImageView
            height={60}
            imagelink={require('assets/images/task-icon.png')} />
        </View>
        <View style={applicationStyles.halfHeight}>
          <CustomTextInput
            autoCapitalize={'none'}
            onChangeText={(text) => this.setState({ fullName: text })}
            placeholder={'Fullname'}
            imageIcon={require('assets/images/user_name.png')}
          />
          <CustomTextInput
              autoCapitalize={'none'}
              onChangeText={(text) => this.setState({email: text})}
              keyboardType={'email-address'}
              placeholder={'Email'}
              imageIcon={require('assets/images/email.png')} />

          <CustomTextInput
            onChangeText={(text) => this.setState({ password: text })}
            autoCapitalize={'none'}
            secureTextEntry={true}
            placeholder={'Password'}
            imageIcon={require('assets/images/password.png')} />
        </View>
        <View style={[applicationStyles.quarterHeight, { justifyContent: 'flex-end' }]}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
          {this.checkToRenderLoading()}
          <View style={styles.signupWrap}>
            <Text style={styles.accountText}>Have an account?</Text>
            <TouchableOpacity activeOpacity={.5} onPress={this.gotoSignIn}>
              <Text style={styles.signupLinkText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}

SignUp.propTypes = {
  signup: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
  newUser: PropTypes.object
};

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    error: state.userState.error,
    loading: state.userState.loading
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    signup: (newUser) => dispatch(signup(newUser))
  }
}
const SignUpConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
export default SignUpConnect;

var styles = StyleSheet.create({
  forgotPasswordText: {
    color: Colors.Alto,
    backgroundColor: Colors.transparent,
    textAlign: 'right',
    paddingRight: 15,
    paddingTop: 10
  },
  SignUpButton: {
    height: 60,
    backgroundColor: Colors.lighBlue,
    alignItems: "center",
    justifyContent: "center"
  },
  SignUpText: {
    color: "#FFF",
    fontSize: 18
  },
  signupWrap: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountText: {
    color: "#D8D8D8",
    backgroundColor: Colors.transparent
  },
  signupLinkText: {
    color: "white",
    marginLeft: 5,
    backgroundColor: Colors.transparent
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    textAlign: 'center',
    lineHeight: 20
  }
});
