//=============================//
//      Action Types
//=============================//
export const SIGN_IN_REQUEST = 'SIGNIN/REQUESTING';
export const SIGN_IN_SUCCESS = 'SIGNIN/SUCCESSED';
export const SIGN_IN_FAILED = 'SIGNIN/FAILED';
//=============================//
export const SIGN_UP_REQUEST = 'SIGNUP/REQUESTING';
export const SIGN_UP_SUCCESS = 'SIGNUP/SUCCESSED';
export const SIGN_UP_FAILED = 'SIGNUP/FAILED';

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
//      Reducer
//=============================//
export const INITIAL_STATE = {
	error: '',
	loading: false
};

export function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SIGN_IN_REQUEST:
		case SIGN_UP_REQUEST:
			return {
				...state,
				loading: true,
				error: ''
			};
		case SIGN_IN_FAILED:
		case SIGN_UP_FAILED:
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

		case SIGN_UP_SUCCESS:
			return {
				...state,
				loading: false,
				error: ''
			};
		default:
			return state;
	}
};


