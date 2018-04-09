// @flow
import type { AppAction } from '../../app/blocks/app/actionTypes';
import type { LoginAction } from '../../app/blocks/login/actionTypes';
import type { SidebarAction } from '../../app/blocks/sidebar/actionTypes';

export type Action = LoginAction | AppAction | SidebarAction;

export type ActionType =
    | 'INCREMENT_COUNTER'
    | 'DECREMENT_COUNTER'
    | 'USER_LOGGED_IN'
    | 'USER_LOGGED_OUT'
    | 'SIDEBAR_SHOW_HEADER'
    | 'SIDEBAR_TOGGLE'
