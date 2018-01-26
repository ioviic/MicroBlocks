// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import type { LoginConfig } from './LoginConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    login,
} from './actions';

import LoginForm from './LoginForm';

import type { State } from '../../../stateManagement/types/state';
import type { FormData } from './LoginForm';
// $FlowFixMe
// import styles from '../../customization/styles/Login.less';

type Props = {
    login:(credentials: FormData) => mixed,
};

export type Configuration = {
    configuration: LoginConfig
}

class Login extends Component<Props & Configuration> {

    onSubmit = (data: FormData) => {
        this.props.login(data);
    };

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
            login
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(Login));
