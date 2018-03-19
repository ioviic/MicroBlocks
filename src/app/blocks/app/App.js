// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
// import logo from '../../../logo.svg';
import AppConfig from './AppConfig';
// import locale from './localizations/translations';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    increment,
    decrement,
    incrementIfEven,
} from './actions';

import type { State } from '../../../stateManagement/types/state';
// $FlowFixMe
// import styles from '../../customization/styles/App.less';
import StandardCard from '../../components/StandardCard';
import TableList   from '../../components/TableList';
import { Grid } from 'material-ui';

type Props = {
    app: number,
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
      <Grid container spacing={24}>
        <Grid item lg={6} md={6} sm={12}>
        <StandardCard
          title={'Table 1'}
          subHeader={'Check information bellow'}

          content={
            <TableList
            headerTitles={['test', 'test2', 'test3', 'test4']}
            tableRows={
              [
                ['test', 'test2', 'test3', 'test4'],
                ['test', 'test2', 'test3', 'test4'],
                ['test', 'test2', 'test3', 'test4']
            ]}
            />
          }
          actions={null}
        />
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
        <StandardCard
          title={'Table 2'}
          subHeader={'Check information bellow'}

          content={
            <TableList
              headerTitles={['test', 'test2', 'test3', 'test4']}
              tableRows={
                [
                  ['test', 'test2', 'test3', 'test4'],
                  ['test', 'test2', 'test3', 'test4'],
                  ['test', 'test2', 'test3', 'test4']
                ]}
            />
          }
          actions={null}
        />
        </Grid>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(App));
