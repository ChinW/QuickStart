import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
	<div className="globalWrapper">
		<div id="banner">
		</div>
		<div className="container">
			<div id="left-side-bar">
			</div>
			<div id="content">
				1234
			</div>
		</div>
	</div>
	,
	document.getElementById("ContentBody")
);

// var Avatar = React.createClass({
// 	render:function(){
// 		return (
// 			<div>
// 				<ProfilePic username = {this.props.username} />
// 				<ProfileLink username = {this.props.username} />
// 			</div>
// 		);
// 	}
// });

// var ProfilePic = React.createClass({
// 	render: function(){
// 		return (
// 			<img src={"http://graph.facebook.com/" + this.props.username + "/picture" } />
// 		);
// 	}
// });

// var ProfileLink = React.createClass({
// 	render:function(){
// 		return (
// 			<a href={"http://www.facebook.com/"+ this.props.username }>
// 				{this.props.username}
// 			</a>
// 		);
// 	}
// });

// ReactDOM.render(
// 	<Avatar username="pwh" />,
// 	document.getElementById("hello")
// )