// @flow
import { combineReducers } from 'redux';
import app from '../app/blocks/app/reducer';
import login from '../app/blocks/login/reducer';
import signup from '../app/blocks/signup/reducer';

const reducers = {
    app, login, signup
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
