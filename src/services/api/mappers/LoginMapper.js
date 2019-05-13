// @flow

import * as UIModels from "../uiModels/Login";
import * as ServerModels from "../serverModels/Login";

import type { ServiceResponse } from "../ResponseTypes";


export const mapLoginRequest = (request: UIModels.Request): ServerModels.Request => ({
  userName: request.userName,
  password: request.password,
});


const mapLoginResponse = (data: ServerModels.Response): UIModels.Response => {
  let response = data.description.split(";");

  return {
    token: response[0],
    userName: response[1]
  };
};

export const resolveResponse = (
  response: ServiceResponse<ServerModels.Response>
): UIModels.Response => {
  return mapLoginResponse(response.data);
};
