// @flow

import axios from "axios";

export class HttpDispatcher {
  send = <T>(url: string, request: T, config: * = {}): Promise<*> => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, request, config)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          console.log(
            "server response encounter error: reason: " + JSON.stringify(err)
          );
          reject(err);
        });
    });
  };

  get = <T>(url: string, request: T, config: * = {}): Promise<*> => {
    return new Promise((resolve, reject) => {
      axios
        .get(url, request, config)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          console.log(
            "server response encounter error: reason: " + JSON.stringify(err)
          );
          reject(err);
        });
    });
  };
}
