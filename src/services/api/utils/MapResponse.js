// @flow
import type {
  ServiceError,
  ServiceException,
  ServiceResponse
} from "../ResponseTypes";

export const success = (data: *): ServiceResponse<any> => {
  return {
    type: "success",
    data: data,
    errorCode: data.hasOwnProperty("errorCode") ? data.errorCode : 0,
    description: data.hasOwnProperty("description") ? data.description : ""
  };
};

export const error = (data: *): ServiceError => {
  return {
    type: "fail",
    errorCode: data.hasOwnProperty("errorCode") ? data.errorCode : 9999,
    description: data.hasOwnProperty("description") ? data.description : ""
  };
};

export const exception = (
  errorCode: number,
  description: *
): ServiceException => {
  return { type: "exception", errorCode, description };
};
