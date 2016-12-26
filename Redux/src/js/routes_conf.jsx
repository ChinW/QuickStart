import _ from 'lodash';

export let RouteConfig = {
    index: {
        _self: '/index'
    }
};

RouteConfig = _.merge(RouteConfig, {
    index: {
        index: `${RouteConfig.index._self}/index`
    }
});
