// @flow

import createReducer from '../../../stateManagement/createReducer';
import type { UserState } from './actionTypes';

const initialState: UserState = {
    email: '',
    token: ''
};

export default createReducer(initialState, {});
