import AuthenticationService from 'network/AuthenticationService';

//=============================//
//      Action Types
//=============================//
export const REQUEST = 'SignUp/SignUp_Request';
export const SUCCESS = 'SignUp/SignUp_Success';
export const FAILED  = 'SignUp/SignUp_Failed';

//=============================//
//      Action Creators
//=============================//
export function signupRequest() {
	return {
		type: REQUEST
	};
}

export function signupRequestSuccess(json) {
	return {
		type: SUCCESS,
		payload: json
	};
}

export function signupRequestFailed(error) {
	return {
		type: FAILED,
		error: error.message
	};
}

//=============================//
//      Reducer
//=============================//
export const INITIAL_STATE = {
	error: '',
	loading: false
};

export function signUpReducer(state = INITIAL_STATE, action) {
	console.log('signUpReducer action', action)
  switch (action.type) {
    case REQUEST:
			return {
				...state,
				loading: true,
				error: ''
			};
		case SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				user: action.payload
			};
		case FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
      return state;
  }
};

//=============================//
//4: Load Data
//=============================//
export function signup(userCredentials) {
  return (dispatch, getState) => {
    // dispatch(signupRequest());
    return AuthenticationService.signUp(userCredentials)
    .then(json => {
        dispatch(signupRequestSuccess(json));
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      dispatch(signupRequestFailed(error))
    });
  };
}
