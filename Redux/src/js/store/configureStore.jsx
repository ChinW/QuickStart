import { createStore,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from 'redux-logger'
import reducer from "../index_redr"

let createStoreWithMiddleware = null;
if (process.env.NODE_ENV === 'development') {
	createStoreWithMiddleware = applyMiddleware(
		thunk
		,createLogger()
	)(createStore);
} else {
	createStoreWithMiddleware = applyMiddleware(
		thunk
	)(createStore);
}

export default function configureStore(initialState){
	const store = createStoreWithMiddleware(reducer,initialState);

	if(module.hot){
		// Enable Webpack hot module replacement for reducers
		module.hot.accept("../index_redr.jsx",() => {
			const nextReducer = require("../index_redr.jsx");
			store.replaceReducer(nextReducer)
		})
	}

	return store
}