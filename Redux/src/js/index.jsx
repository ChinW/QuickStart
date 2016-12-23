import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../css/global.scss"

import { Router,Route,IndexRoute, useRouterHistory } from "react-router"
import createHistory from "history/lib/createHashHistory"

import App from "./component/app.comp";
import Login from "./container/login.app";
import Browse from "./container/browse.app";

import configureStore from "./store/configureStore"

const store = configureStore();
const history = useRouterHistory(createHistory)({queryKey:false});

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router history={history} >
				<Route path="/" component={App} > 
					<IndexRoute component={Browse}  />
					<Route path="login" component={Login} />
				</Route>
			</Router>
		</div>
	</Provider>
	,
	document.getElementById("CONTENT")
);