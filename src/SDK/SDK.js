// @flow
import Block from './Block';
import BlockPromise from './BlockPromise';
import { addLocales } from './locale';
import configureStore from '../stateManagement/store/createStore';

export default class SDK {
    blocks: BlockPromise[];
    blocksInfo: [];
    store: {};
    constructor(blocksMeta: any) {
        this.blocks = [];
        this.blocksInfo = blocksMeta;
        addLocales();
    }

    build() {
        this.store = configureStore();
        this.blocks = this.blocksInfo.map((item) =>{
            const promise = item.com.then((w) => {
                const component = w.default;
                return new Block(item.name, component, item.configurations, JSON.parse(item.messages), this.store);
            });
            return new BlockPromise(item.name, promise);
        });
    }

    placeBlock(blockName: string, selector: string){
        const block = this.blocks
            .find( (item) => {
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
