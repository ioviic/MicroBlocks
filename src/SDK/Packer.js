// @flow
import SDK from './SDK';
import fs from 'fs';

export default class Packer {
    SDK: SDK;
    constructor(){
        this.SDK = new SDK();
    }

    startSDK() {
        window['SDK'] = this.SDK;
        return this.SDK;
    }

    getBlockMetaFiles(){
        fs.readdir('./',(err, files) => {
            console.log(files);
        });
    }

}
