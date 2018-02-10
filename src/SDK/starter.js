// @flow
import Packer from '../packer/Packer';

let ecoSystem;

export const run = () =>{
  if (!ecoSystem)
  {
    const packer = new Packer();
    packer.buildSdk();
    ecoSystem = packer.startSDK();
  }

  return ecoSystem;
};

export const SDK = run();
