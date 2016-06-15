import {combineState} from "./functions.jsx"
import cookie from "react-cookie"
import {TOKEN_INVALID,LOG_OUT} from  "../action/common.action"

//Reducer
export default function Common(state = {}, action){
	switch(action.type){
		case LOG_OUT:
		case TOKEN_INVALID:
			cookie.remove("lecture_token")
			window.location.href =  "./index.html"
			return state
		default:
			return state
	}
}