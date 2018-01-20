// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import logo from '../../../logo.svg';
import './App.css';
import AppConfig from './AppConfig';
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

type Props = {
    counter: number,
    increment: (amount: number) => mixed,
    decrement: (amount: number) => mixed,
    incrementIfEven: (amount: number) => mixed,
};

type Configuration = {
    configuration: AppConfig
}

export class App extends Component<Props & Configuration> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React lessons</h1>
        </header>
          <p className="App-intro">
              Opening soon: { this.props.configuration.appTitle }
          </p>

          <p className="App-intro">
              Stay in touch:
              <FormattedMessage id={locale.hello.id} defaultMessage={locale.hello.defaultMessage} />
          </p>
          <p className="App-intro">
              Counter: { this.props.counter }
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

const mapStateToProps = ({ counter }: State) => ({
    counter,
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

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(App));
