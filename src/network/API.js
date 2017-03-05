import AuthenticationService from 'network/AuthenticationService';
import Task from 'network/Task';

import {
	loginRequest,
	loginRequestSuccess,
	loginRequestFailed,
	signUpRequest,
	signUpRequestSuccess,
	signUpRequestFailed,
	taskRequest,
	taskRequestSuccess,
	taskRequestFailed
} from 'redux/user'


//=============================//
// SignUp handler
//=============================//
export const signup = (newUser) => {
	const payload = {
		...newUser,
		"trainee_id": parseInt(Math.random() * 1000, 10),
		"birthday": "1986-01-20",
		"token": "abcxyzwendsjkfjdsklfjkds"
	}
	return (dispatch) => {
		dispatch(signUpRequest());
		return AuthenticationService.signup(payload)
			.then(json => {
				dispatch(signUpRequestSuccess(json));
			})
			.catch(error => {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				dispatch(signUpRequestFailed(error))
			});
	};
}

//=============================//
// SignIn handler
//=============================//
export const login = (userCredentials) => {
	return (dispatch) => {
		dispatch(loginRequest());
		return AuthenticationService.signin(userCredentials)
			.then(json => {
				dispatch(loginRequestSuccess(json));
			})
			.catch(error => {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				dispatch(loginRequestFailed(error))
			});
	};
}
//=============================//
// Task List handler
//=============================//
export const getList = (userCredentials) => {
	return (dispatch) => {
		dispatch(taskRequest());
		return Task.getTasks(userCredentials)
			.then(json => {
				dispatch(taskRequestSuccess(json));
			})
			.catch(error => {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				dispatch(taskRequestFailed(error))
			});
	};
}