// @flow
import type { AppAction } from '../../app/blocks/app/actionTypes';
import type { LoginAction } from '../../app/blocks/login/actionTypes';

export type Action = LoginAction | AppAction;

export type ActionType =
    | 'INCREMENT_COUNTER'
    | 'DECREMENT_COUNTER'
    | 'USER_LOGGED_IN'
