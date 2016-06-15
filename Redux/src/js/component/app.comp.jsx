const React = require('react');
import * as Definer from "../definer"
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { pushPath } = require('redux-simple-router')
import { Banner, Footer } from "../component/common.comp"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    login(){
    	return (
	        <div>
	        	<div id="banner" className="banner" >
	        		<Banner />
	        	</div>
	        	<div className="container">
					<div className="row">
						<div className="col-xs-12" id="main-body">
							{this.props.children}
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12" id="footer" >
							<Footer />
						</div>
					</div>
				</div>
			</div>
		);
    }

    primary(){
    	return (
	        <div>
	        	<div id="banner" className="banner" >
	        		<Banner />
	        	</div>
	        	<div >
					<div className="row" style={{marginRight:"0px",marginLeft:"0px"}} >
						<div className="col-xs-2" id="left-side">
							MENU
						</div>
						<div className="col-xs-10" id="main-body">
							{this.props.children}
						</div>
					</div>
					<div className="row" style={{marginRight:"0px",marginLeft:"0px"}} >
						<div className="col-xs-12" id="footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		);
    }
    browse(){
    	return (
	        <div>
	        	<div id="banner" className="banner" >
	        		<Banner />
	        	</div>
	        	<div >
					<div className="row" style={{marginRight:"0px",marginLeft:"0px"}} >
						<div className="col-xs-2" id="left-side">
							LIST HERE
						</div>
						<div className="col-xs-10" id="main-body">
							{this.props.children}
						</div>
					</div>
					<div className="row" style={{marginRight:"0px",marginLeft:"0px"}} >
						<div className="col-xs-12" id="footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		);
    }
    render() {
    	if(this.props.location.pathname == "/"){
    		return this.browse()
    	}else if(this.props.location.pathname == "/login"){
    		return this.login()
    	}else{
    		return this.primary()
    	}
    }
}

export default connect(null,{pushPath})(App);

