/**
 * # reducers
 * This class combines all the reducers into one
 */
import { combineReducers } from "redux";

import { signInReducer } from "redux/signin";
import { signUpReducer } from "redux/signup";
import { taskReducer } from "redux/task";


const RESET_ERROR_MESSAGE = 'Reset Error Message';
/**
 * ## CombineReducers
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */

function errorMessage(state = null, action) {
  const {type, error} = action;
  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }
  return state;
}

const reducers = {
  errorState: errorMessage,
  signInState: signInReducer,
  signUpState: signUpReducer,
  taskState: taskReducer
}

const rootReducer = combineReducers(reducers)
export default rootReducer;
