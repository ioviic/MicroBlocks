// @flow

import createReducer from '../createReducer';
import type { Action } from '../types/actions';

type State = number;

const initialState = 0;

export default createReducer(initialState, {
    INCREMENT_COUNTER: (state: State, action: Action) => {
        return state + action.payload;
    },
    DECREMENT_COUNTER: (state: State, action: Action) => {
        return state - action.payload;
    }
});
