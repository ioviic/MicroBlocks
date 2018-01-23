// @flow
import { combineReducers } from 'redux';
import app from '../app/blocks/app/reducer';
import login from '../app/blocks/login/reducer';

const reducers = {
    app, login
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
