import type { LoginAction, UserState } from '../../../stateManagement/types/actionTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';
import api from '../../api/api';

export let userLoggedIn = (user: UserState): LoginAction => {
    return {
        type: 'USER_LOGGED_IN',
        payload: user
    };
};
export let userLoggedOut = (): LoginAction => {
    return {
        type: 'USER_LOGGED_OUT'
    };
};

export const loginAction = (credentials): any => {
    return (dispatch: Dispatch, getState: GetState) => {
        return api.user.login(credentials)
          .then(user => {
            localStorage.userJWT = user.token;
            dispatch(userLoggedIn(user));
          });
    };
};

export const logoutAction = () => {
  return (dispatch: Dispatch, getState: GetState) => {
      localStorage.removeItem('userJWT');
      dispatch(userLoggedOut());
  };
};
