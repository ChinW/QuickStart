import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import configureStore from './store/configureStore';
import '../css/global.scss';
import { router } from './routes';

const store = configureStore();
const history = useRouterHistory(createHistory)({ queryKey: false });

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} >
			{router}
		</Router>
	</Provider>
	,
	document.getElementById("CONTENT")
);