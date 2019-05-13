// @flow

import * as UIModels from "../uiModels/Login";

export interface LoginService {
  login(request: UIModels.Request): Promise<UIModels.Response>;
}
