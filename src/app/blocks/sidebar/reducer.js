// @flow
import createReducer from '../../../stateManagement/createReducer';
import type { SidebarAction } from './actionTypes';

type State = {
  showHeader: boolean;
  showSidebar: boolean;
};

const initialState : State =  {
  showHeader: true,
  showSidebar: false
} ;

export default createReducer(initialState, {
    SIDEBAR_SHOW_HEADER: (state: State, action: SidebarAction): State => {
      return  {...state, showHeader : action.payload};
    },
    SIDEBAR_TOGGLE: (state: State, action: SidebarAction): State => {
        return  {...state, showSidebar : action.payload};
      },
});
