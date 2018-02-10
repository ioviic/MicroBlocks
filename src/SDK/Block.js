// @flow
import ReactDOM from 'react-dom';
import React from 'react';
import type { Element, ComponentType } from 'react';
import { ConfigurationProvider } from '../configurations/index';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

export class Block {
    name: string;
    block: ComponentType<any>;
    configurations: any;
    translations: any;
    store: any;

    constructor(name: string, element: ComponentType<any>, configuration: any, translations: any, store: any) {
        this.name = name;
        this.block = element;
        this.configurations = configuration;
        this.translations = translations;
        this.store = store;
    }

    show(selector: string) {
        const node = document.querySelector(selector);
        node && ReactDOM.render(this.wrapperHOC(), node);
    }

    wrapperHOC = (): Element<any> => {
      const Block= this.block;

      return (
        <ConfigurationProvider configuration = { JSON.parse(this.configurations) }>
          <Provider store={ this.store }>
            <IntlProvider locale={'en'} messages={this.translations['en']}>
              <Block />
            </IntlProvider>
          </Provider>
        </ConfigurationProvider>
      );
    };
}

export default Block;
