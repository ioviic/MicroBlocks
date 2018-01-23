import './index.css';
import Packer from './packer/Packer';
import registerServiceWorker from './registerServiceWorker';

const packer = new Packer();
packer.buildSdk();
const SDK = packer.startSDK();

const appBlock = SDK.getBlocks()[0];
SDK.placeBlock(appBlock, '#root');
const loginBlock = SDK.getBlocks()[1];
SDK.placeBlock(loginBlock, '#Login');

registerServiceWorker();
