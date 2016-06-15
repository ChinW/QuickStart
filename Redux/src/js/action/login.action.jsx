import {serverURI} from "../definer.jsx"
import createHistory from 'history/lib/createHashHistory';
import cookie from "react-cookie"
export const CHANGE_PANEL = 'CHANGE_PANEL'
export const LOGIN = "LOGIN"
export const RECEIVE_LOGIN = "RECEIVE_LOGIN"
export const FAILURE_LOGIN = "FAILURE_LOGIN" 

const history = createHistory();

export function changePanel(){
	return {
		type:CHANGE_PANEL
	}
}

function requestLogin(){
	console.log("in requestLogin")
	return {
		type:LOGIN
	}
}
function LoginStart(user,password){
	return dispatch => {
		dispatch(requestLogin())
		$.ajax({
			url:serverURI+"auth/auth",
			data:{name:user,pass:password},
			type:"post",
			dataType:"json",

			success:function(data,jqXHR,status){
				if(data.status == 0){
					console.log(data.data)
					cookie.save("lecture_token",data.data)
					// window.location.href = "primary.html"
					history.push({
						pathname:"/primary?panel=major",
						query:{panel:"major"}
					})
				}else{
					dispatch({
						type:FAILURE_LOGIN,
						loginResponse:data.info
					})
				}
			}
		})
		// var req = new Request("http://lecturedeal.app/auth/auth",{
		// 	method:"GET",
		// 	// body:"name="+user+"&pass="+password
		// })
		// fetch(req).then(
		// 	response => {
		// 		console.log(response)
		// 	}
		// ).then( json =>
		// 	console.log(json)
		// )
	}
}

function shouldLogin(state){
	return !state.LoginPanel.isFetching
}

export function login(user,password){
	// return {
	// 	type:LOGIN
	// }
	return (dispatch,getState) => {
		if(shouldLogin(getState())){
			return dispatch(LoginStart(user,password))
		}
	}
}