import React,{ PropTypes, Component } from "react"
const { connect } = require('react-redux')
import * as LoginActions from "../action/login.action"
import { Link,RouterContext } from "react-router"

class LoginForm extends Component{
	constructor(props){
		super(props)
		this.login = this.login.bind(this)
		this.run = this.run.bind(this)
		this.displayName = "Login"
	}
	
	run(){
		this.props.history.push({
			pathname:"/primary",
			query:{panel:"practice"}
		})
	}

	registerPanel(){
		return (
			<div className="mockup-content">
				<div className="morph-content">
					<div className="morph-button morph-button-modal-2">
						<div className="content-style-form content-style-form-1">
							<form style={{width:"350px"}}>
								<p>
									<label>用户名</label>
									<input type="text" ref="username"  />
								</p>
								<p>
									<label>密码</label>
									<input type="password" ref="password" />
								</p>
								<p>
									<label>重复密码</label>
									<input type="password"  ref="rptPassword"/>
								</p>
								<p>
									<button onClick={this.register}>注册</button>
								</p>
								<p className="text-center">
									<a onClick={this.props.toggle}>登录</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}

	loginPanel(){
		return (
			<div className="mockup-content">
				<div className="morph-content">
					<div className="morph-button morph-button-modal-2">
						<div className="content-style-form content-style-form-1">
							<div className="brand-img">Logo IMG</div>
							<form style={{width:"350px"}}>
								<p>
									<label>用户名</label>
									<input type="text" ref="username" />
								</p>
								<p>
									<label>密码</label>
									<input type="password"  ref="password"/>
								</p>
								<p>
									<button onClick={this.login} ref="loginButton">{this.props.loginResponse}</button>
								</p>
								<p className="text-center">
									<a  onClick={this.props.toggle}>注册用户</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}

	login(e){
		e.preventDefault();
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		this.props.dispatch(LoginActions.login(username,password))
	}
	register(){

	}
	render(){
		const {panel} = this.props
		if(!panel){
			return this.loginPanel();
		}else{
			return this.registerPanel();	
		}
	}
}

LoginForm.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default LoginForm

