// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import type { SignupConfig } from './SignupConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  signupAction,
} from './actions';

import SignupForm from './SignupForm';

import type { State } from '../../../stateManagement/types/state';
import type { FormData } from './actions';
import type { UserState } from './actionTypes';
// $FlowFixMe
// import styles from '../../customization/styles/Signup.less';

type Props = {
  login: UserState,
  signupAction:(credentials: FormData) => any,
};

export type Configuration = {
    configuration: SignupConfig
}

class Signup extends Component<Props & Configuration> {

    onSubmit = (data: FormData) => {
        return this.props.signupAction(data);
    };

  render() {
    return (
      this.props.login.email
        ? ''
        : <SignupForm submit={this.onSubmit} />
    );
  };
}

const mapStateToProps = ({ login }: State) => ({
    login,
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
          signupAction,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(Signup));
