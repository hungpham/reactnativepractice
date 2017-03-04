import { Platform } from 'react-native';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import devTools, { composeWithDevTools } from 'remote-redux-devtools';
import reducer from 'config/rootReducer';
import loading from 'redux/middleware/loading';

let store;
 if (__DEV__) {
	 const enhancer = compose(
     applyMiddleware(loading, thunk, promiseMiddleware()),
     devTools({
       name: Platform.OS,
       hostname: 'localhost',
       port: 5678
     })
   );
	 store = createStore(reducer, {}, enhancer);
} else {
	store = createStore(
	 reducer,
	 composeWithDevTools(
		 applyMiddleware(loading, thunk, promiseMiddleware())
	 )
	);
}

export default store;
