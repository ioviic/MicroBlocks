import './index.css';
import Packer from './SDK/Packer';
import registerServiceWorker from './registerServiceWorker';

const packer = new Packer();
const SDK = packer.startSDK();

packer.getBlockMetaFiles();

const appBlock = SDK.getBlocks()[0];
SDK.placeBlock(appBlock, '#root');

registerServiceWorker();
