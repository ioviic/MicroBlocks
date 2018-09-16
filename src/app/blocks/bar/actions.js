import type { AppAction } from '../../../stateManagement/types/actionTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';

export let pinSidebar = (show: boolean = true): AppAction => {
  return {
    type: 'BAR_PIN_SIDEBAR',
    payload: show
  };
};

export let sidebarOpen = (show: boolean = true): AppAction => {
  return {
    type: 'BAR_SIDEBAR_OPEN',
    payload: show
  };
};


export let dockSidebar = (): AppAction => {
  return (dispatch: Dispatch, getState: GetState) => {
    const { bar } = getState();
    dispatch(pinSidebar(!bar.pinSidebar));
  };
};

export let openSidebar = (show: boolean = true): AppAction => {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(sidebarOpen(true));
  };
};

