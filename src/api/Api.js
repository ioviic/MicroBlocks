export default function Api(name) {
  // return function (target) {
  //   target.meta = {name: target.name};
  // }

  // constructor.meta = constructor.meta || {};
  // constructor.meta.type = 'class';
}

export const defineServiceName = (name: string, service: any): void => {
  Object.defineProperty(service, 'meta', {
    value: {
      name,
      ...service.meta
    }
  });
};
