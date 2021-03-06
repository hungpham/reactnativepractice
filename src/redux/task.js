//=============================//
//      Action Types
//=============================//
export const REQUEST = 'TASK/Request';
export const SUCCESS = 'TASK/Success';
export const FAILED  = 'TASK/Failed';

//=============================//
//      Action Creators
//=============================//
export function taskRequest() {
	return {
		type: REQUEST
	};
}

export function taskRequestSuccess(json) {
	return {
		type: SUCCESS,
		payload: json
	};
}

export function taskRequestFailed(error) {
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

export function taskReducer(state = INITIAL_STATE, action) {
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
				tasks: action.payload
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