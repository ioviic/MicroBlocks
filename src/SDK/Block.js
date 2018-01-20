// @flow
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import type { Element, ComponentType } from 'react';
import { ConfigurationProvider } from '../configurations/index';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import configureStore from '../app/blocks/app/store/createStore';

export default class Block {
    name: string;
    block: ComponentType<any>;
    configurations: any;
    translations: any;

    constructor(name: string, element: ComponentType<any>, configuration: any, translations: any) {
        this.name = name;
        this.block = element;
        this.configurations = configuration;
        this.translations = translations;
    }

    show(selector: string) {
        const node = document.querySelector(selector);
        node && ReactDOM.render(this.hoc(this.block), node);
    }

    hoc = (Block: ComponentType<any>): Element<any> => {
        return (
                <ConfigurationProvider configuration = { JSON.parse(this.configurations) }>
                    <Provider store={ configureStore() }>
                        <IntlProvider locale={'en'} messages={this.translations['en']}>
                            <Block />
                        </IntlProvider>
                    </Provider>
                </ConfigurationProvider>
            );
    };
}

