// @flow

export interface ServiceDispatcher {
  send<T, R>(route: string, request: T, duration?: number): Promise<R>;
}
