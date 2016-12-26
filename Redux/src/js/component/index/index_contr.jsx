import React, { PropTypes, Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './index_act';

export default class Index extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="index">
				This is Index
			</div>
		)
	}
}

function mapStateToProps(state) {
    return state.index;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export const IndexContainer  = connect(mapStateToProps, mapDispatchToProps)(Index);
