// @flow
import type { AppAction } from '../../app/blocks/app/actionTypes';
import type { LoginAction } from '../../app/blocks/login/actionTypes';
import type { SidebarAction } from '../../app/blocks/sidebar/actionTypes';
import type { BarAction } from '../../app/blocks/bar/actionTypes'

export type Action = LoginAction | AppAction | SidebarAction | BarAction;

export type ActionType =
    | 'INCREMENT_COUNTER'
    | 'DECREMENT_COUNTER'
    | 'USER_LOGGED_IN'
    | 'USER_LOGGED_OUT'
    | 'SIDEBAR_TOGGLE'
    | 'BAR_PIN_SIDEBAR'
    | 'BAR_SIDEBAR_OPEN'
