// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

import type { Store } from '../types/store';
import thunk from 'redux-thunk';
const enhancer = compose(applyMiddleware(thunk));

export default function configureStore(): Store {
    return createStore(rootReducer,enhancer);
}
