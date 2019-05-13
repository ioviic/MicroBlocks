// @flow

export type Error = {
  errorCode: number,
  description: string
};

export type ServiceResponse<T> = Error & {
  type: "success",
  data: T
};

export type ServiceError = Error & { type: "fail" };

export type ServiceException = Error & { type: "exception" };
