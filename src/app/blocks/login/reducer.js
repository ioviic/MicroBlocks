// @flow

import createReducer from '../../../stateManagement/createReducer';
import type { UserLoggedInAction, UserState } from './actionTypes';

const initialState: UserState = {
    email: '',
    token: ''
};

export default createReducer(initialState, {
  USER_LOGGED_IN: (state: UserState, action: UserLoggedInAction): UserState => {
      return action.payload;
  },
  USER_LOGGED_OUT: (): UserState => {
    return initialState;
  },
});
