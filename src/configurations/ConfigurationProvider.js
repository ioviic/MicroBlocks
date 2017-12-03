// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { PropTypes } from 'prop-types';
type Props = {
    configuration: any,
    children?: Node
};

export class ConfigurationProvider extends Component<Props> {
    static childContextTypes = {
        configuration: PropTypes.object.isRequired,
    };

    getChildContext() {
        return { configuration: this.props.configuration };
    }
    render() {
        return <div>{ this.props.children }</div>;
    }
}

export default ConfigurationProvider;
