
export type SidebarToggleAction = {
  type: 'SIDEBAR_TOGGLE';
  payload: boolean;
}

export type SidebarAction = SidebarShowHeaderAction | SidebarToggleAction ;
