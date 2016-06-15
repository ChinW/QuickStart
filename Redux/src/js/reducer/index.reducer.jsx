import { combineReducers } from "redux"
import LoginPanel from "./login.reducer"
import BrowsePanel from "./browse.reducer"
import Common from "./common.reducer"

const RootReducer = combineReducers({
	LoginPanel,
	BrowsePanel,
	Common
})

export default RootReducer