import * as Definer from "../definer.jsx"
import {needLogin} from "./common.action"
import cookie from "react-cookie"

export const INIT_BROWSE = "INIT_BROWSE"
export const TOGGLE_MAJOR = "TOGGLE_MAJOR"
export const SHOW_MAJOR_INFO = "SHOW_MAJOR_INFO"
export const SHOW_BROWSE_DIALOG = "SHOW_BROWSE_DIALOG"
export const HIDE_BROWSE_DIALOG = "HIDE_BROWSE_DIALOG"
export const SHOW_BROWSE_RECORD = "SHOW_BROWSE_RECORD"

export function toggleMajor(){
	return {
		type:TOGGLE_MAJOR
	}
}

export function showModal(disabled=true,loadID=null,recordType="lecture"){
	return dispatch => {
		Definer.Panel = recordType
		var straightFeedback = {
			type:SHOW_BROWSE_DIALOG,
			disabled:disabled,
			straightFeedback:null
		}
		if(loadID != null && loadID != undefined){
			straightFeedback.recordInfo = "Pending"
			$.ajax({
				url: Definer.serverURI + recordType +"/show/"+loadID,
				data:{id:loadID},
				dataType:"json",
				type:"post",
				success:function(data,jqXHR,status){
					dispatch({
						type:SHOW_BROWSE_RECORD,
						recordInfo:data.data
					})
				}
			})
		}
		return dispatch(straightFeedback)
	}
}

export function hideModal(){
	return {
		type:HIDE_BROWSE_DIALOG
	}
}