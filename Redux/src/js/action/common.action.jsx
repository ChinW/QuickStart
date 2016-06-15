import {serverURI} from "../definer.jsx"

export const TOKEN_INVALID = "TOKEN_INVALID"
export const LOG_OUT = "LOG_OUT"

export function needLogin(){
	return {
		type: TOKEN_INVALID
	}
}
export function logout(){
	return {
		type: LOG_OUT
	}
}