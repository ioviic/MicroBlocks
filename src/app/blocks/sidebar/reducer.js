// @flow
import createReducer from '../../../stateManagement/createReducer';
import type { SidebarAction } from './actionTypes';
import DraftsIcon from 'material-ui-icons/Drafts';

//Get rid of this move this in different more meaningful place
const appRoutes = [
  { path: "/login", sidebarName: "Login", icon: DraftsIcon },
  { path: "/dashboard", sidebarName: "Dashboard", icon: DraftsIcon },
  { redirect: true, path: "/", to: "/login" }
];

type State = {
  routes: Array<*>;
  showHeader: boolean;
  showSidebar: boolean;
};

const initialState : State =  {
  routes: appRoutes,
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
