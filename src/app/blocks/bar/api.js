
import Api from '../../../api/Api'
import ApiMethod from '../../../api/ApiMethod'

import { Observable } from 'rxjs';
import 'rxjs/add/operator/distinctUntilChanged';

export const selectIsSideBarPinned = storeState => storeState.sidebar.pinSidebar;

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
export class BarApi {
  store: any;

  constructor(store) {
    this.store = store;
  }

  @ApiMethod('Observable')
  sideBarPin(): Observable<string> {
    return toObservable(this.store, selectIsSideBarPinned).distinctUntilChanged();
  }
}


export const createApi = (store) => {
  return new BarApi(store);
};

