// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../index';
import type { Store } from '../types/store';

const enhancer = compose(applyMiddleware(thunk));

export default function configureStore(): Store {
    return createStore(rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
      enhancer);
}
