
import Api from '../../../api/Api'
import ApiMethod from '../../../api/ApiMethod'

import { Observable } from 'rxjs/Observable';

import {increment} from "./actions"
export const selectIsLoggedIn = storeState => Boolean(storeState.auth.sessionId);

const whenDefineNext = (observer, value) => {
  if (value !== undefined) {
    observer.next(value);
  }
};
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
  currentOptionCategory(): Observable<string> {
    // return toObservable(this.store, selectCurrentFilter('optionCategory')).distinctUntilChanged();
    return toObservable(this.store, selectIsLoggedIn).distinctUntilChanged();
  }

  // @ApiMethod('Promise')
  // selectOptionCategory(optionCategory: OptionCategory) {
  //   this.store.dispatch(selectOptionCategoryAction(optionCategory));
  //   this.store.dispatch(selectOptionCategoryAction(optionCategory));
  // }

}
// defineServiceName('AppApi', AppApi);

// console.log(new AppApi("test"));

export const createService = (store) => {
  return new AppApi(store);
};

// const services = [{ createService, service: AppApi }];
// export { services };
