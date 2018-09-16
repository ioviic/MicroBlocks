// @flow
import createReducer from '../../../stateManagement/createReducer';
import type { BarAction } from './actionTypes';

type State = {
  pinSidebar: boolean;
  sidebarOpen: boolean;
};

const initialState : State =  {
  pinSidebar: false,
  sidebarOpen: false,
} ;

export default createReducer(initialState, {
  BAR_PIN_SIDEBAR: (state: State, action: BarAction): State => {
    return  {...state, pinSidebar: action.payload};
  },
  BAR_SIDEBAR_OPEN: (state: State, action: BarAction): State => {
    return  {...state, sidebarOpen: action.payload};
  },

});
