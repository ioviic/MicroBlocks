import './index.css';
import Packer from './SDK/Packer';
import registerServiceWorker from './registerServiceWorker';

const packer = new Packer();
const SDK = packer.startSDK();
SDK.placeBlock('App', '#root');

registerServiceWorker();
