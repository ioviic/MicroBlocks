// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import logo from '../../../logo.svg';
import AppConfig from './SwitchAreaConfig';
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
    app: number,
    increment: (amount: number) => mixed,
    decrement: (amount: number) => mixed,
    incrementIfEven: (amount: number) => mixed,
};

type Configuration = {
    configuration: AppConfig
}

export class SwitchArea extends Component<Props & Configuration> {
  render() {
    return (
      <div className={`${styles.App}`}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React lessons</h1>
        </header>
          <p className={styles.AppIntro}>
              Opening soon: { this.props.configuration.appTitle }
          </p>

          <p className={styles.AppIntro}>
              Stay in touch:
              <FormattedMessage id={locale.hello.id} defaultMessage={locale.hello.defaultMessage} />
          </p>
          <p className={styles.AppIntro}>
              Counter: { this.props.app }
          </p>
            <div>
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
      </div>
    );
  }
}

const mapStateToProps = ({ app }: State) => ({
    app,
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

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(SwitchArea));
