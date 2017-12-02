// @flow
import type { ComponentType } from 'react';
import { PropTypes } from 'prop-types';
import React from 'react';

function injectConfigs<T>(
    Component: ComponentType<{ configuration: { test: string} } & T>
): ComponentType<T> {
    return class WrappedComponent extends React.Component<T> {

        static contextTypes = {
            configuration: PropTypes.object.isRequired,
        };

        render () {
            return <Component { ...this.props } configuration={ this.context.configuration } />;
        }
    };
}

export default injectConfigs;
