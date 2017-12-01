// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
type Props = {
    configuration: {},
    children?: Node
};

class ConfigurationProvider extends Component<Props> {
    static childContextTypes = {
        configuration: {},
    };
    getChildContext() {
        return { configuration:{ test: 'test' } };
    }
    render() {
        return <div>{ this.props.children }</div>;
    }
}

export default ConfigurationProvider;
