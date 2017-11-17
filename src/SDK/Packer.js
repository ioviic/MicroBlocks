// @flow
import SDK from './SDK';

export default class Packer {
    SDK: SDK;
    constructor(){
        this.SDK = new SDK();
    }

    startSDK() {
        window['SDK'] = this.SDK;
        return this.SDK;
    }

}
