// @flow
import createReducer from '../../../stateManagement/createReducer';
import type { SidebarAction } from './actionTypes';

type State = {
  showSidebar: boolean;
};

const initialState : State =  {
  showSidebar: false
} ;

export default createReducer(initialState, {
    SIDEBAR_TOGGLE: (state: State, action: SidebarAction): State => {
        return  {...state, showSidebar : action.payload};
      },
});
