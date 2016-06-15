import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import operationPanel from "../component/browse.comp"

//Map Redux state to component props
function mapStateToProps(state){
	// console.log("browse app changed",state)
	return {
		major:state.BrowsePanel.major,
		modal:state.BrowsePanel.modal
	}
}

//Map Redux actions to component props
function mapDispatchToProps(dispatch){
	return {
		dispatch: dispatch
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(operationPanel)