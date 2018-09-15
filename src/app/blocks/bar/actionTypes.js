// @flow

export type PinSidebarAction = {
  type: 'BAR_PIN_SIDEBAR';
  payload: boolean;
}

export type SidebarOpenAction = {
  type: 'BAR_SIDEBAR_OPEN';
  payload: boolean;
}

export type BarAction = PinSidebarAction | SidebarOpenAction ;
