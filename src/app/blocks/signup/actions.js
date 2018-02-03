// @flow

import { userLoggedIn } from '../login/actions';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';
import api from '../../api/api';

export type FormData = {
  email: string;
  password: string
}

export const signupAction = (credentials: FormData): any => {
  return (dispatch: Dispatch, getState: GetState) => {
    return api.user.signup(credentials)
      .then(user => {
        global.localStorage.userJWT = user.token;
        dispatch(userLoggedIn(user));
      });
  };
};

