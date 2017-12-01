// @flow
import type { ComponentType } from 'react';
import React from 'react';

function injectConfigs<Props: { }>(
    Component: ComponentType<{ configuration: { test: string} } & Props>
): ComponentType<Props> {
    return class WrappedComponent extends React.Component<Props> {

        static contextTypes = {
            configuration: {},
        };

        render (){
            return <Component { ...this.props } configuration={ this.context.configuration } />;
        }
    };
}

export default injectConfigs;
