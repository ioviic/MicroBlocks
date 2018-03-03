// @flow

import createReducer from '../../../stateManagement/createReducer';
import type { UserLoggedInAction, UserState } from './actionTypes';

const initialState: UserState = {
    email: '',
    token: ''
};

const token = () => {
  if (global.localStorage.userJWT){
    return global.localStorage.userJWT;
  }
  return '';
};

const startState: UserState = {...initialState, token: token()};

export default createReducer(startState, {
  USER_LOGGED_IN: (state: UserState, action: UserLoggedInAction): UserState => {
      return action.payload;
  },
  USER_LOGGED_OUT: (): UserState => {
    return initialState;
  },
});
