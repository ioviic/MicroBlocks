// @flow
import createReducer from '../../../stateManagement/createReducer';
import type { SidebarAction } from './actionTypes';

//Get rid of this move this in different more meaningful place
import DraftsIcon from '@material-ui/icons/Drafts';

const appRoutes = [
  { path: "/login", sidebarName: "Login", icon: DraftsIcon },
  { path: "/dashboard", sidebarName: "Dashboard", icon: DraftsIcon },
  { redirect: true, path: "/", to: "/login" }
];

type State = {
  routes: Array<*>;
  showHeader: boolean;
  showSidebar: boolean;
  pinSidebar: boolean;
};

const initialState : State =  {
  routes: appRoutes,
  showHeader: true,
  showSidebar: false,
  pinSidebar: false,
} ;

export default createReducer(initialState, {
    SIDEBAR_SHOW_HEADER: (state: State, action: SidebarAction): State => {
      return  {...state, showHeader : action.payload};
    },
    SIDEBAR_TOGGLE: (state: State, action: SidebarAction): State => {
        return  {...state, showSidebar : action.payload};
      },
    SIDEBAR_PIN: (state: State, action: SidebarAction): State => {
        return  {...state, showSidebar : action.payload, pinSidebar: action.payload};
      },

});
