// @flow
export type UserState = {
  email: string;
  token: string;
};

export type IncrementAction = {
    type: 'INCREMENT_COUNTER';
    payload: number;
}

export type DecrementAction = {
    type: 'DECREMENT_COUNTER';
    payload: number;
}

export type UserLoggedInAction = {
    type: 'USER_LOGGED_IN';
    payload: UserState;
}

export type AppAction = DecrementAction | IncrementAction ;

export type LoginAction = UserLoggedInAction;

export type Action = UserLoggedInAction | AppAction;

export type ActionType =
    | 'INCREMENT_COUNTER'
    | 'DECREMENT_COUNTER'
    | 'USER_LOGGED_IN'
