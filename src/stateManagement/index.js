// @flow
import { combineReducers } from 'redux';
import counter from '../app/blocks/app/reducer';

const reducers = {
    counter
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
