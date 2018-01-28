// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import type { LoginConfig } from './LoginConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    loginAction,
} from './actions';

import LoginForm from './LoginForm';

import type { State } from '../../../stateManagement/types/state';
import type { FormData } from './LoginForm';
import type { UserState } from './actionTypes';
// $FlowFixMe
// import styles from '../../customization/styles/Login.less';

type Props = {
  login: UserState,
  loginAction:(credentials: FormData) => any,
};

export type Configuration = {
    configuration: LoginConfig
}

class Login extends Component<Props & Configuration> {

    onSubmit = (data: FormData) => {
        return this.props.loginAction(data);
    };

  render() {
    return (
      this.props.login.email ? <span> User: { this.props.login.email } </span> : <LoginForm submit={this.onSubmit} />
    );
  };
}

const mapStateToProps = ({ login }: State) => ({
    login,
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            loginAction
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(Login));
