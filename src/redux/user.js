//=============================//
//      Action Types
//=============================//
export const SIGN_IN_REQUEST = 'SIGNIN/REQUESTING';
export const SIGN_IN_SUCCESS = 'SIGNIN/SUCCESSED';
export const SIGN_IN_FAILED = 'SIGNIN/FAILED';
//=============================//
export const SIGN_OUT_REQUEST = 'SIGNOUT/REQUESTING';
export const SIGN_OUT_SUCCESS = 'SIGNOUT/SUCCESSED';
export const SIGN_OUT_FAILED = 'SIGNOUT/FAILED';
//=============================//
export const SIGN_UP_REQUEST = 'SIGNUP/REQUESTING';
export const SIGN_UP_SUCCESS = 'SIGNUP/SUCCESSED';
export const SIGN_UP_FAILED = 'SIGNUP/FAILED';

export const USER_LIST_REQUEST = 'USER_LIST/REQUESTING';
export const USER_LIST_SUCCESS = 'USER_LIST/SUCCESSED';
export const USER_LIST_FAILED = 'USER_LIST/FAILED';

//=============================//
//      Action Creators
//=============================//
export function loginRequest() {
	return {
		type: SIGN_IN_REQUEST
	};
}

export function loginRequestSuccess(json) {
	return {
		type: SIGN_IN_SUCCESS,
		payload: json
	};
}

export function loginRequestFailed(error) {
	return {
		type: SIGN_IN_FAILED,
		error: error.message
	};
}

export function logoutRequest() {
	return {
		type: SIGN_OUT_REQUEST
	};
}

export function logoutRequestSuccess(json) {
	return {
		type: SIGN_OUT_SUCCESS,
		payload: json
	};
}

export function logoutRequestFailed(error) {
	return {
		type: SIGN_OUT_FAILED,
		error: error.message
	};
}
//=============================//
export function signUpRequest() {
	return {
		type: SIGN_UP_REQUEST
	};
}

export function signUpRequestSuccess(json) {
	return {
		type: SIGN_UP_SUCCESS,
		payload: json
	};
}

export function signUpRequestFailed(error) {
	return {
		type: SIGN_UP_FAILED,
		error: error.message
	};
}

//=============================//
export function usersRequest() {
	return {
		type: USER_LIST_REQUEST
	};
}

export function usersRequestSuccess(json) {
	return {
		type: USER_LIST_SUCCESS,
		payload: json
	};
}

export function usersRequestFailed(error) {
	return {
		type: USER_LIST_FAILED,
		error: error.message
	};
}

//=============================//
//      Reducer
//=============================//
export const INITIAL_STATE = {
	error: '',
	loading: false
	// ,user: {
	// 	trainee_id: 3,
	// 	full_name: "test",
	// 	email: "test@gmail.com",
	// 	birthday: "1986-01-20T00:00:00.000Z",
	// 	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRyYWluZWVfaWQiOjMsImZ1bGxfbmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiYmlydGhkYXkiOiIxOTg2LTAxLTIwVDAwOjAwOjAwLjAwMFoifSwiaWF0IjoxNDg5NDE5Mjg4LCJleHAiOjE0ODk0MjI4ODh9.PutN2HHQGJbGkc-pl7HxwrUkiNdJvHOQjqcmrP3_l-Q"
	// }
};

export function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SIGN_IN_REQUEST:
		case SIGN_OUT_REQUEST:
		case SIGN_UP_REQUEST:
		case USER_LIST_REQUEST:
			return {
				...state,
				loading: true,
				error: ''
			};
		case SIGN_IN_FAILED:
		case SIGN_OUT_FAILED:
		case SIGN_UP_FAILED:
		case USER_LIST_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case SIGN_IN_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				user: action.payload
			};

		case SIGN_OUT_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				user: action.payload
			};

		case SIGN_UP_SUCCESS:
			return {
				...state,
				loading: false,
				error: ''
			};
		case USER_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				users: action.payload
			};
		default:
			return state;
	}
};


