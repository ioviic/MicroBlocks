import type { AppAction } from '../../../stateManagement/types/actionTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';

// export let increment = (amount: number = 1): AppAction => {
//     return {
//         type: 'INCREMENT_COUNTER',
//         payload: amount
//     };
// };
//
// export let decrement = (amount: number = 1): AppAction => {
//     return {
//         type: 'DECREMENT_COUNTER',
//         payload: amount
//     };
// };
//
// export let incrementIfEven = (amount: number = 1): AppAction => {
//     return (dispatch: Dispatch, getState: GetState) => {
//         const { app } = getState();
//
//         if (app % 2 === 0) {
//             dispatch(increment(amount));
//         }
//     };
// };
