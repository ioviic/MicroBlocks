import './index.css';
import Packer from './SDK/Packer';
import registerServiceWorker from './registerServiceWorker';

const packer = new Packer();
const SDK = packer.startSDK();
console.log(SDK.getBlocks());
const appBlocks = SDK.getBlocks()[0];
SDK.placeBlock(appBlocks, '#root');

registerServiceWorker();
