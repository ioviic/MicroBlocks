import type { Action } from './types/actions';
import type { Dispatch, GetState } from './types/store';

export let increment = (amount: number = 1): Action => {
    return {
        type: 'INCREMENT_COUNTER',
        payload: amount
    };
};

export let decrement = (amount: number = 1): Action => {
    return {
        type: 'DECREMENT_COUNTER',
        payload: amount
    };
};

export let incrementIfEven = (amount: number = 1): Action => {
    return (dispatch: Dispatch, getState: GetState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            dispatch(increment(amount));
        }
    };
};
