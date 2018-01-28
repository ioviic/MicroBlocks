// @flow

import createReducer from '../../../stateManagement/createReducer';
import type { AppAction } from '../../../stateManagement/types/actionsTypes';

type State = number;

const initialState = 0;

export default createReducer(initialState, {
    INCREMENT_COUNTER: (state: State, action: AppAction) => {
        return state + action.payload;
    },
    DECREMENT_COUNTER: (state: State, action: AppAction) => {
        return state - action.payload;
    }
});
