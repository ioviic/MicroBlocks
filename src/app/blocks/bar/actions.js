import type { AppAction } from '../../../stateManagement/types/actionTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';

export let pinSidebar = (show: boolean = true): AppAction => {
  return {
    type: 'SIDEBAR_PIN',
    payload: show
  };
};


export let dockSidebar = (): AppAction => {
  return (dispatch: Dispatch, getState: GetState) => {
    const { bar } = getState();
    dispatch(pinSidebar(!bar.pinSidebar));
  };
};

