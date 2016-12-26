import React from 'react';
import { Route, IndexRedirect } from "react-router";
import { AppContainer } from './component/app/app_contr';
import { IndexRoutes } from './component/index/index_routes';
import { RouteConfig } from './routes_conf';

export const router = (
	<Route path="/" component={AppContainer} >
		<IndexRedirect to={RouteConfig.index._self} />
        { IndexRoutes(RouteConfig.index) }
	</Route>
);