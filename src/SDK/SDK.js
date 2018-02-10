// @flow
import Block from './Block';
import BlockPromise from './BlockPromise';
import { addLocales } from './locale';
import configureStore from '../stateManagement/store/createStore';

export class SDK {
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

    getBlock(blockName: string): Promise<any> {

      const block = this.blocks.find( (item) => {
        return item.name === blockName;
      });

      (!block) && console.error('Cannot find Block: <' + blockName + '/> in SDK. Please make sure this block is added in MicroBlocks ecosystem');

      return (block) ? block.promise() : Promise.reject({err: 'No Such Block'});
    }

}

export default SDK;
