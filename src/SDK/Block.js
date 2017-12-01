// @flow
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import type { Element, ComponentType } from 'react';
import ConfigurationProvider from '../configurations/ConfigurationProvider';

export default class Block {
    name: string;
    block: ComponentType<any>;

    constructor(name: string, element: ComponentType<any>) {
        this.name = name;
        this.block = element;
    }

    show(selector: string) {
        const node = document.querySelector(selector);
        node && ReactDOM.render(this.hoc(this.block), node);
    }

    hoc = (Block: ComponentType<any>): Element<any> => {
        return (
                <ConfigurationProvider configuration={ { test: 'test' } }>
                    <Block />
                </ConfigurationProvider>
            );
    };
}

