import SDK from './SDK';

export default class Packer {

    constructor(){
        this.SDK = new SDK();
    }

    startSDK() {
        window['SDK'] = this.SDK;
        return this.SDK;
    }

}
