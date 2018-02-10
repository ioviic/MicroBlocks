import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { run } from './SDK/starter';

run();

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

// const appBlock = SDK.getBlocks()[0];
// SDK.placeBlock(appBlock, '#root');
// const loginBlock = SDK.getBlocks()[1];
// SDK.placeBlock(loginBlock, '#Login');
// const signupBlock = SDK.getBlocks()[2];
// SDK.placeBlock(signupBlock, '#Signup');


registerServiceWorker();
