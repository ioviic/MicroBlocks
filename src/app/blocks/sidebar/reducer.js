// @flow
import createReducer from '../../../stateManagement/createReducer';
import type { SidebarAction } from './actionTypes';
import DraftsIcon from 'material-ui-icons/Drafts';
const appRoutes = [
  { path: "/login", sidebarName: "Login", icon: DraftsIcon },
  { path: "/dashboard", sidebarName: "Dashboard", icon: DraftsIcon },
  { redirect: true, path: "/", to: "/login" }
];

type State = {
  routes: Array<*>;
  showHeader: boolean;
};

const initialState : State =  {
  routes: appRoutes,
  showHeader: true
} ;

export default createReducer(initialState, {
    SIDEBAR_SHOW_HEADER: (state: State, action: SidebarAction) => {
      return  {...state, showHeader : action.payload};
    },
});
