
import Api from '../../../api/Api'
import ApiMethod from '../../../api/ApiMethod'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';

import {increment} from "./actions"
export const selectIsLoggedIn = storeState => storeState.app;

const whenDefineNext = (observer, value) => {
  if (value !== undefined) {
    observer.next(value);
  }
};

//TODO get rid of this block in other place
const toObservable = (store, selector): Observable<any> => {
  return Observable.create((observer) => {
    whenDefineNext(observer, selector(store.getState())); // push current state
    const unsubscribe = store.subscribe(() => {
      whenDefineNext(observer, selector(store.getState()));
    }); // chain to store updates
    return () => { unsubscribe(); };
  });
};

export { toObservable };


@Api
export class AppApi {
  store: any;

  constructor(store) {
    this.store = store;
  }

  @ApiMethod('Promise')
  appIncrement() {
    this.store.dispatch(increment())
  }



  @ApiMethod('Observable')
  currentApp(): Observable<string> {
    return toObservable(this.store, selectIsLoggedIn).distinctUntilChanged();
  }

}

