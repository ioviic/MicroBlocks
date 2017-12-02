// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import logo from '../../../logo.svg';
import './App.css';

type Props = { };

type Configuration = {
    configuration: { test: string }
}

export class App extends Component<Props & Configuration> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save for reloading
        </p>
          <p className="App-intro">
              To get started { this.props.configuration.test }
          </p>
      </div>
    );
  }
}

export default injectConfigs(App);

