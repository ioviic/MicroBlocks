
export type SidebarShowHeaderAction = {
  type: 'SIDEBAR_SHOW_HEADER';
  payload: boolean;
}

export type SidebarToggleAction = {
  type: 'SIDEBAR_TOGGLE';
  payload: boolean;
}

export type SidebarAction = SidebarShowHeaderAction | SidebarToggleAction ;
