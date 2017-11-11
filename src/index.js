import './index.css';
import SDK from './SDK/SDK';
import registerServiceWorker from './registerServiceWorker';

const sdk = new SDK();

sdk.placeBlock('App', '#root');
registerServiceWorker();
