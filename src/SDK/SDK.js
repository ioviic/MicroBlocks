import App from '../App'
import Block from "./Block";

export default class SDK {


    constructor(){
        this.blocks = [];
        this.blocks.push(new Block('App', App));
    }

    placeBlock(blockName, selector){
        const block = this.blocks.find( (item) => {
                            return item.name === blockName;
                        });
        block.show(selector);
    }
}