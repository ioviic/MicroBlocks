// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import type { LoginConfig } from './LoginConfig';
import locale from './localizations/translations';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    increment,
    decrement,
    incrementIfEven,
} from './actions';

import type { State } from '../../../stateManagement/types/state';
// $FlowFixMe
import styles from '../../customization/styles/App.less';

type Props = {
    login: number,
    increment: (amount: number) => mixed,
    decrement: (amount: number) => mixed,
    incrementIfEven: (amount: number) => mixed,
};

type Configuration = {
    configuration: LoginConfig
}

export class Login extends Component<Props & Configuration> {
  render() {
    return (
      <div className={styles.login}>
          <span>
              <FormattedMessage id={locale.Test.id} defaultMessage={locale.Test.defaultMessage} />
              { this.props.configuration.test.toString() }</span>
          <p className={styles.AppIntro}>
              Counter: { this.props.login }
          </p>
          <button key="increment" onClick={() => this.props.increment(1)}>
              +
          </button>
          <button key="decrement" onClick={() => this.props.decrement(1)}>
              -
          </button>
          <button
              key="incrementIfEven"
              onClick={() => this.props.incrementIfEven(1)}
          >
              % 2 ? +
          </button>
      </div>
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
