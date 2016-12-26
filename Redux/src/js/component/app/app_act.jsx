import { createAction } from 'redux-actions';

export const ACTIONS = {
    SET_USER: 'APP_SET_USER'
};

export const setUser = createAction(ACTIONS.SET_USER, (user) => {
    return { user };
});
