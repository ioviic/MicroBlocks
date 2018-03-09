// @flow

import createReducer from '../../../stateManagement/createReducer';
import type { UserLoggedInAction, UserState } from './actionTypes';

const initialState: UserState = {
    email: '',
    token: ''
};

const localState = () => {
  let token = (global.localStorage.userJWT) ? global.localStorage.userJWT : '';
  let email = (global.localStorage.userEmail) ? global.localStorage.userEmail : '';

  return {
    token: token,
    email: email
  };
};

const startState: UserState = localState();

export default createReducer(startState, {
  USER_LOGGED_IN: (state: UserState, action: UserLoggedInAction): UserState => {
      return action.payload;
  },
  USER_LOGGED_OUT: (): UserState => {
    return initialState;
  },
});
