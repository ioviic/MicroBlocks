// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { PropTypes } from 'prop-types';
type Props = {
    configuration: {test: string},
    children?: Node
};

class ConfigurationProvider extends Component<Props> {
    static childContextTypes = {
        configuration: PropTypes.object.isRequired,
    };

    getChildContext() {
        return { configuration:{ test: 'test' } };
    }
    render() {
        return <div>{ this.props.children }</div>;
    }
}

export default ConfigurationProvider;
