// @flow
import Packer from '../packer/Packer';

let ecoSystem;
const packer = new Packer();

export const run = () =>{
  if (!ecoSystem)
  {
    packer.buildSdk();
    ecoSystem = packer.startSDK();
  }

  return ecoSystem;
};

export const SDK = run();
