import { combineReducers } from "redux";
import app from "./component/app/app_redr";
import index from "./component/index/index_redr";

const RootReducer = combineReducers({
	app,
	index,
});

export default RootReducer;