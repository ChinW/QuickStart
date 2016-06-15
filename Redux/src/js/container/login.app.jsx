import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import LoginForm from "../component/login.comp"
import * as LoginActions from "../action/login.action"

//Map Redux state to component props
function mapStateToProps(state){
	return {
		panel: state.LoginPanel.panel,
		isFetching: state.LoginPanel.isFetching,
		loginResponse: state.LoginPanel.loginResponse
	}
}

//Map Redux actions to component props
function mapDispatchToProps(dispatch){
	return {
		dispatch: dispatch,
		toggle: () => dispatch(LoginActions.changePanel())
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)