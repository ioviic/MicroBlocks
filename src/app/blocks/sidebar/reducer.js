// @flow
import createReducer from '../../../stateManagement/createReducer';
import type { SidebarAction } from './actionTypes';

type State = boolean;

const initialState = true;

export default createReducer(initialState, {
    SIDEBAR_SHOW_HEADER: (state: State, action: SidebarAction) => {
      return  action.payload;
    },
});
