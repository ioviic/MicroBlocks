import type { AppAction } from '../../../stateManagement/types/actionTypes';
import type { Dispatch, GetState } from '../../../stateManagement/types/store';

export let showHeader = (show: boolean = true): AppAction => {
    return {
        type: 'SIDEBAR_SHOW_HEADER',
        payload: show
    };
};

export let toggleHeader = (show: boolean = true): AppAction => {
    return (dispatch: Dispatch, getState: GetState) => {

        const { sidebar } = getState();

        dispatch(showHeader(!sidebar));
    };
};
