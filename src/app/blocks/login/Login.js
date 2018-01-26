// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import type { LoginConfig } from './LoginConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    increment,
    decrement,
    incrementIfEven,
} from './actions';

import LoginForm from './LoginForm';

import type { State } from '../../../stateManagement/types/state';
// $FlowFixMe
// import styles from '../../customization/styles/App.less';

type Props = {
    login: number,
    increment: (amount: number) => mixed,
    decrement: (amount: number) => mixed,
    incrementIfEven: (amount: number) => mixed,
};

export type Configuration = {
    configuration: LoginConfig
}

class Login extends Component<Props & Configuration> {

    onSubmit = (data) => console.log(data);

  render() {
    return (
        <LoginForm submit={this.onSubmit} />
    );
  }
}

const mapStateToProps = ({ login }: State) => ({
    login,
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            increment,
            decrement,
            incrementIfEven,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(Login));
