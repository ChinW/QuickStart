import { React, ReactDOM, Component } from "../assets.jsx";
import { Link } from "react-router"
import * as Definer from "../definer"
import cookie from "react-cookie"
import createHistory from "history/lib/createHashHistory";

const history = createHistory()

export class Banner extends Component{
	constructor(props){
		super(props)
		this.renderLogin = this.renderLogin.bind(this)
	}

	renderLogin(){
		var token = cookie.load("lecture_token")
		if(token != null && token != undefined){
			history.push({
				pathname:"/primary"
				, search: "?panel=major"
			})
			location.reload()
		}else{
			history.push({
				pathname:"/login"
			})
		}
	}

	render(){
		return (
			<div className="header">
				<div className="row">
					<div className="col-xs-3 header-logo">
						App Logo
					</div>
					<div className="header-title">
						<h1 style={{fontSize:"36px"}}>Web APP Name</h1>
					</div>
					<div className="header_menu">
						<a onClick={this.renderLogin}> > loginWordsInBanner</a>
						<br/>
						<Link to="/"> > Browse</Link>
					</div>
				</div>
			</div>
		);
	}
}

export class Footer extends Component{
	render(){
		return (
			<div className="footer text-center">
				<p>Made by <b>Bangqiang Chi</b> </p>
			</div>
		);
	}
}