
import { Observable } from 'rxjs';

export default function ApiMethod(type: 'Promise' | 'Observable') {
  return function (target: any, propertyKey: string, descriptor: any) {

    let originalMethod = descriptor.value;

    if (typeof originalMethod === 'function') {
      descriptor.value = function(...args) {
        console.log('Calling the Method Wrapper');

        if (type === 'Promise'){
          return new Promise((resolve, reject) => {
            try {
              const result = originalMethod.apply(this, args);
              console.log('Api Call: Successful');
              return resolve(result);
            } catch (e) {
              return reject(new Error(`Something went wrong on calling Api Method`))
            }
          });
        }else if ('Observable'){
          return Observable.create((observer) => {
            const obs = originalMethod.apply(this, args);
            const sub = obs.subscribe(
              val => observer.next(val),
              error => observer.error(error)
            );
            return () => sub.unsubscribe();
          });
        }
      }
    }
    return descriptor;
  };
}
