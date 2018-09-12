// @flow
import createReducer from '../../../stateManagement/createReducer';
import type { SidebarAction } from './actionTypes';

type State = {
  pinSidebar: boolean;
};

const initialState : State =  {
  pinSidebar: false,
} ;

export default createReducer(initialState, {
  SIDEBAR_PIN: (state: State, action: SidebarAction): State => {
    return  {...state, pinSidebar: action.payload};
  },

});