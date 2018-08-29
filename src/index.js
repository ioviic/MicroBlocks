import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import { run } from './SDK/starter';
import HomePage from './pages/HomePage';
import { createBrowserHistory } from 'history';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

import {AppApi} from './app/blocks/app/api'
import { defineServiceName } from './api/Api';
// console.log(AppApi.meta);
//defineServiceName("hopa",AppApi);
//console.log(new AppApi('jjj'));

const hist = createBrowserHistory();
const indexRoutes = [
  { path: "/", component: HomePage}
];

let SDK = run();

let serviceApi = new AppApi(SDK.store);
serviceApi.appIncrement().then(result =>{
    console.log("Success")
  }
).catch(err =>{
  console.log("Fail")
});

console.log( SDK.getInitialState());

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {
        indexRoutes.map((prop,key) => {
          return (
            <Route path={prop.path} component={HomePage}  key={key}/>
          );
        })
      }
      {/*<Route path="/" component={HomePage}/>*/}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// const appBlock = SDK.getBlocks()[0];
// SDK.placeBlock(appBlock, '#root');
// const loginBlock = SDK.getBlocks()[1];
// SDK.placeBlock(loginBlock, '#Login');
// const signupBlock = SDK.getBlocks()[2];
// SDK.placeBlock(signupBlock, '#Signup');


registerServiceWorker();
