// @flow

type IncrementAction = {
    type: 'INCREMENT_COUNTER';
    payload: number;
}

type DecrementAction = {
    type: 'DECREMENT_COUNTER';
    payload: number;
}

export type Action = DecrementAction | IncrementAction;

export type ActionType =
    | 'INCREMENT_COUNTER'
    | 'DECREMENT_COUNTER'
