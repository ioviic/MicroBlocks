// @flow
import * as ReactDOM from 'react-dom';
import React, { Component } from 'react';
import type { Element, Node } from 'react';
import BlockPortal from './BlockPortal';

export default class Block {
    name: string;
    block: Node;

    constructor(name: string, element: Node) {
        this.name = name;
        this.block = element;
    }

    show(selector: string) {
        const node = document.querySelector(selector);
        node && ReactDOM.render(this.getBlock(), node);
    }

    getBlock(){
        const Block = this.block;
        return (<Block />);
    }

}
