import type { AppAction } from '../../../stateManagement/types/actionTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';

export let sidebarToggle = (show: boolean = true): AppAction => {
  return {
    type: 'SIDEBAR_TOGGLE',
    payload: show
  };
};

export let toggleSidebar = (show: boolean = true): AppAction => {
    return (dispatch: Dispatch, getState: GetState) => {
        const { sidebar } = getState();
        dispatch(sidebarToggle(!sidebar.showSidebar));
    };
};
