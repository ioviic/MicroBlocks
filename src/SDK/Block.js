// @flow
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import type { Element, ComponentType } from 'react';

export default class Block {
    name: string;
    block: ComponentType<any>;

    constructor(name: string, element: ComponentType<any>) {
        this.name = name;
        this.block = element;
    }

    show(selector: string) {
        const node = document.querySelector(selector);
        node && ReactDOM.render(this.HOC(this.block), node);
    }

    HOC = (InnerComponent: ComponentType<any>): Element<any> => {
        return <InnerComponent/>
    };
}

