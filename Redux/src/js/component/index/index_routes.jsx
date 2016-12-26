import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { IndexContainer } from './index_contr';
import { RouteConfig } from '../../routes_conf';

export const IndexRoutes = (prefix = RouteConfig.index) => {
    return (
        <Route path={prefix._self}>
            <IndexRedirect to={prefix.index} />
            <Route path={prefix.index} component={IndexContainer} />
        </Route>
    );
};
