import type { LoginAction, UserState } from '../../../stateManagement/types/actionsTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';
import api from '../../api/api';

export let userLoggedIn = (user: UserState): LoginAction => {
    return {
        type: 'USER_LOGGED_IN',
        payload: user
    };
};

export const loginAction = (credentials): any => {
    return (dispatch: Dispatch, getState: GetState) => {
        return api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
    };
};
