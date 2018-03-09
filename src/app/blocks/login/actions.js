// @flow

import type { LoginAction, UserState } from './actionTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';
import api from '../../api/api';

export type FormData = {
  email: string;
  password: string
}

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


export const loginAction = (credentials: FormData ): any => {
  return (dispatch: Dispatch, getState: GetState) => {
    return api.user.login(credentials)
      .then(user => {
        global.localStorage.userJWT = user.token;
        global.localStorage.userEmail = user.email;
        dispatch(userLoggedIn(user));
      });
  };
};

export const logoutAction = () => {
  return (dispatch: Dispatch, getState: GetState) => {
    global.localStorage.removeItem('userJWT');
    dispatch(userLoggedOut());
  };
};
