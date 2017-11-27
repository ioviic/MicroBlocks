/* eslint import/no-webpack-loader-syntax: off */
// @flow
import SDK from './SDK';
import fs from 'fs';

// import test from 'block-loader';
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
        const grabBlocks = require('block-loader!');
        console.log(grabBlocks);
        // fs.readdir('./',(err, files) => {
        //     console.log(test());
        // });
    }

}
