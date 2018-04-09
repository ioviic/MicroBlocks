import type { AppAction } from '../../../stateManagement/types/actionTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';

export let showHeader = (show: boolean = true): AppAction => {
    return {
        type: 'SIDEBAR_SHOW_HEADER',
        payload: show
    };
};

export let showSidebar = (show: boolean = true): AppAction => {
  return {
    type: 'SIDEBAR_TOGGLE',
    payload: show
  };
};

export let toggleHeader = (show: boolean = true): AppAction => {
    return (dispatch: Dispatch, getState: GetState) => {

        const { sidebar } = getState();

        dispatch(showHeader(!sidebar.showHeader));
    };
};

export let toggleSidebar = (show: boolean = true): AppAction => {
    return (dispatch: Dispatch, getState: GetState) => {

        const { sidebar } = getState();

        dispatch(showSidebar(!sidebar.showSidebar));
    };
};
