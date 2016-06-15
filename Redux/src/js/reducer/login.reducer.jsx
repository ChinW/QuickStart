import {combineState} from "./functions.jsx"
import {CHANGE_PANEL,LOGIN,RECEIVE_LOGIN,FAILURE_LOGIN} from  "../action/login.action"

//Reducer
export default function LoginPanel(state = {panel:false,isFetching:false,loginResponse:"登录"}, action){
	let panel = state.panel
	switch(action.type){
		case CHANGE_PANEL:
			return combineState(state,{panel:!panel})
		case LOGIN:
			return combineState(state,{ isFetching:true})
		case RECEIVE_LOGIN:
			return combineState(state,{ isFetching:false})
		case FAILURE_LOGIN:
			console.log("FAILURE_LOGIN ",action)
			return combineState(state,{ isFetching:false,loginResponse:action.loginResponse})
		default:
			return state
	}
}