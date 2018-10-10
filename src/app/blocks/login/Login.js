// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import type { LoginConfig } from './LoginConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loginAction,
  logoutAction
} from './actions';

import LoginForm from './LoginForm';

import type { State } from '../../../stateManagement/types/state';
import type { FormData } from './actions';
import type { UserState } from './actionTypes';
// $FlowFixMe
// import styles from '../../customization/styles/Login.less';

type Props = {
  login: UserState,
  logoutAction:() => any;
  loginAction:(credentials: FormData) => any,
};

export type Configuration = {
    configuration: LoginConfig
}

class Login extends Component<Props & Configuration> {

    onSubmit = (data: FormData) => {
        return this.props.loginAction(data);
    };

    logout = () => {
      this.props.logoutAction();
    };

  render() {
    return (<LoginForm submit={this.onSubmit} />);
  };
}

const mapStateToProps = ({ login }: State) => ({
    login,
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
          loginAction,
          logoutAction
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(Login));
