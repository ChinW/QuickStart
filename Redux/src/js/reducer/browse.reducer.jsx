import {combineState} from "./functions.jsx"
import {TOGGLE_MAJOR, SHOW_MAJOR_INFO, SHOW_BROWSE_DIALOG, HIDE_BROWSE_DIALOG, SHOW_BROWSE_RECORD} from  "../action/browse.action"

//Reducer
export default function BrowsePanel(state = {activeItems:{},major:null,modal:{show:false,disabled:true,loadContent:null,status:"check",error:"", file:{base64: "", name: "", type: ""} }}, action){
	switch(action.type){
		case TOGGLE_MAJOR:
			return combineState(state,{major:true})
		case SHOW_MAJOR_INFO:
			return Object.assign({}, state, {major:action.data})
		case SHOW_BROWSE_DIALOG:
			return combineState(state,{ 
				modal:Object.assign({},state.modal,
					{
						show:true,
						loadContent:action.recordInfo
					}
					)})
		case HIDE_BROWSE_DIALOG:
			return combineState(state,{
				modal:Object.assign(
					{},
					state.modal,
					{show:false,loadContent:null,error:""})
			})
		case SHOW_BROWSE_RECORD:
			return combineState(state,{modal:Object.assign({},state.modal,{loadContent:action.recordInfo["0"]})})
		default:
			return state
	}
}