import type { Action } from '../../../stateManagement/types/actionsTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';

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
        const { login } = getState();

        if (login % 2 === 0) {
            dispatch(increment(amount));
        }
    };
};
