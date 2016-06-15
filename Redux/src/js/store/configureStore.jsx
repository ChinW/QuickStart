import { createStore,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createLogger from 'redux-logger'
import reducer from "../reducer/index.reducer"

var createStoreWithMiddleware = null;
if(DEV){
	createStoreWithMiddleware = applyMiddleware(
		thunk
		,createLogger()
	)(createStore);
}else{
	createStoreWithMiddleware = applyMiddleware(
		thunk
	)(createStore);
}

export default function configureStore(initialState){
	const store = createStoreWithMiddleware(reducer,initialState)

	if(module.hot){
		// Enable Webpack hot module replacement for reducers
		module.hot.accept("../reducer/index.reducer.jsx",() => {
			const nextReducer = require("../reducer/index.reducer.jsx")
			store.replaceReducer(nextReducer)
		})
	}

	return store
}