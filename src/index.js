import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SDK from './SDK/SDK';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
const sdk = new SDK();

sdk.placeBlock('App', 'root');
registerServiceWorker();
