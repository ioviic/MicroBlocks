export type UserState = {
  email: string;
  token: string;
};

export type UserLoggedInAction = {
  type: 'USER_LOGGED_IN';
  payload: UserState;
}

export type UserLoggedOutAction = {
  type: 'USER_LOGGED_OUT';
}

export type LoginAction = UserLoggedInAction | UserLoggedOutAction;
