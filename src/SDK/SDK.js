// @flow
import App from '../app/blocks/app/App';
import Block from './Block';

export default class SDK {
    blocks: Block[];
    constructor() {
        this.blocks = [];
        this.blocks.push(new Block('App', App));
    }

    placeBlock(blockName: string, selector: string){
        const block = this.blocks.find( (item) => {
                            return item.name === blockName;
                        });
        block && block.show(selector);
    }

    getBlocks() : string[] {
        return this.blocks.map((block) => {
            return block.name;
        });
    }
}
