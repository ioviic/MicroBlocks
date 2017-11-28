/* eslint import/no-webpack-loader-syntax: off */
// @flow
import SDK from '../SDK/SDK';
// $FlowFixMe
import grabBlocks from 'block-loader!';

export default class Packer {
    SDK: SDK;

    constructor(){
        this.SDK = new SDK(grabBlocks);
    }

    buildSdk() {
        this.SDK.build();
    }

    startSDK() {
        window['SDK'] = this.SDK;
        return this.SDK;
    }

    getBlockMetaFiles(){
        console.log(grabBlocks);
    }

}
