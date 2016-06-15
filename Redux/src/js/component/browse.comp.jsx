import React,{ PropTypes, Component } from "react"
import * as Definer from "../definer.jsx" 
import * as Action from "../action/browse.action"

export default class BrowsePanel extends Component{
	constructor(props){
		super(props)
		this.toggle = this.toggle.bind(this)
		this.checkMore = this.checkMore.bind(this)
		this.hideDialog = this.hideDialog.bind(this)
	}
	toggle(){
		this.props.dispatch(Action.toggleMajor())
	}
	checkMore(id, recordType){
		this.props.dispatch(Action.showModal(true,id,recordType))
	}
	hideDialog(){
		this.props.dispatch(Action.hideModal())
	}
	handleAlertDismiss(){
		this.props.dispatch(Action.handleAlertDismiss())
	}
	render(){
		return (
			<div className="operation-panel">
				<div className="operation-bar">
					<h2 className="title"> Panel Title</h2>
				</div>
				 Content Here
			</div>
		)
	}
}
