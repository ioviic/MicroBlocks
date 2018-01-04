// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import logo from '../../../logo.svg';
import './App.css';
import AppConfig from './AppConfig';
import locale from './localizations/translations';
import { FormattedMessage } from 'react-intl';

type Props = { };

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
        //<p className="App-intro">
          //To get started, edit <code>src/App.js</code> and save for reloading
        //</p>
          <p className="App-intro">
              Opening soon: { this.props.configuration.appTitle }
          </p>

          <p className="App-intro">
              Stay in touch:
              <FormattedMessage id={locale.hello.id} defaultMessage={locale.hello.defaultMessage} />
          </p>
      </div>
    );
  }
}

export default injectConfigs(App);

