// @flow

import { LoginService } from "../services/LoginService";
import { HttpDispatcher } from "../Dispatcher";
import * as UIModels from "../uiModels/Login";
import * as LoginMapper from "../mappers/LoginMapper";
import * as MapResponse from "../utils/MapResponse";

export class LoginProvider implements LoginService {
  provider: HttpDispatcher;

  constructor() {
    this.provider = new HttpDispatcher();
  }

  request = (uri: string, request: *, responseResolver: *): Promise<UIModels.Response> => {
    return new Promise((resolve, reject) => {

      this.provider
        .send(uri, request)
        .then(response => {
              resolve(responseResolver(response));
        })
        .catch(error => {
          reject(error);
          throw MapResponse.exception(error.name, error.message);
        });
    });
  };

  login = (request: UIModels.Request): Promise<UIModels.Response> =>
    this.request(
      // TODO Put and extract ExternalApi Url from config
      "/login",
      {
        ...LoginMapper.mapLoginRequest(request)
      },
      LoginMapper.resolveResponse
    );
}
