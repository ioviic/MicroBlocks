import * as ReactDOM from 'react-dom';
import * as React from 'react';

export default class Block {

    constructor(name: string, element: JSX.Element) {
        this.name = name;
        this.block = element;
    }

    show(selector) {
        const node = document.querySelector(selector);
        ReactDOM.render(this.getBlock(), node);
    }

    getBlock() {
        const Block = this.block;

        return (<Block />);
    }
}
