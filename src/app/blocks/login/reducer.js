// @flow

import createReducer from '../../../stateManagement/createReducer';
import type { LoginAction, UserState } from '../../../stateManagement/types/actionsTypes';

const initialState: UserState = {
    email: '',
    token: ''
};

export default createReducer(initialState, {
    USER_LOGGED_IN: (state: UserState, action: LoginAction) => {
        return action.payload;
    }
});
