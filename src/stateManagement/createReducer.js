// @flow

import type { Action, ActionType } from './types/actionTypes';

type Reducer<S, A: Action> =(S, A) => S;

export default function createReducer<S, A: Action>(
    initialState: S,
    handlers: { [key: ActionType]: Reducer<S, A>}
): Reducer<S, A> {
    return function reducer(state: S = initialState, action: A): S {
        return handlers.hasOwnProperty(action.type)
        ? handlers[action.type](state, action)
        : state;
    };
}
