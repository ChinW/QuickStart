import { ACTIONS } from './app_act';
import { handleActions } from 'redux-actions';

export default handleActions({
    [ACTIONS.SET_UP]: (state, action) => {
    return state;
}
}, {
    app: true
});
