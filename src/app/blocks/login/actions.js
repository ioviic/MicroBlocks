import type { Action } from '../../../stateManagement/types/actionsTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';
import api from '../api';


export let userLoggedIn = (user: User): Action => {
    return {
        type: 'SHOW_USER',
        payload: user
    };
};

export const login = (credentials): Action => {
    return (dispatch: Dispatch, getState: GetState) => {
        api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
    };
};
