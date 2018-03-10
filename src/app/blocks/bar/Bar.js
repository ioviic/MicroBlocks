// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import BarConfig from './BarConfig';

import type { State } from '../../../stateManagement/types/state';
import { BlockComponent } from '../../../SDK';

import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles/index';
import { BarStyles as styles } from '../../customization/styles/Bar';

import locale from './localizations/translations';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

type Props = {
    app: number,
    classes: any
};

type Configuration = {
    configuration: BarConfig
}

export class Bar extends Component<Props & Configuration> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <div className={classes.barChip}>
            <BlockComponent block='Chip' />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ app }: State) => ({
    app,
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        { },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Bar)));
