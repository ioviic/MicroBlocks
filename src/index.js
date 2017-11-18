import './index.css';
import Packer from './SDK/Packer';
import registerServiceWorker from './registerServiceWorker';

const packer = new Packer();
const SDK = packer.startSDK();

const appBlock = SDK.getBlocks()[0];
SDK.placeBlock(appBlock, '#root');

registerServiceWorker();
