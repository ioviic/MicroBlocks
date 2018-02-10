// @flow
import Block from './Block';

class BlockPromise {
    name: string;
    blockPromise: Promise<any>;
    block: Block;

    constructor(name: string, promise: Promise<any>) {
        this.name = name;
        this.blockPromise = promise;
    }

    show(selector: string) {
        this.blockPromise.then((block: Block) => {
            block.show(selector);
            this.block = block;
            return block;
        });
    }

    promise(): Promise<any>{
      return this.blockPromise
    }
}

export default BlockPromise;
