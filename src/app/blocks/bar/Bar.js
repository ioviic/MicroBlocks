// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import BarConfig from './BarConfig';

import type { State } from '../../../stateManagement/types/state';
import { BlockComponent } from '../../../SDK';

import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles/index';
import { BarStyles as styles } from '../../customization/styles/Bar';
import { dockSidebar, openSidebar } from '../bar/actions';

// import locale from './localizations/translations';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

type Props = {
    app: number,
    classes: any,
    openSidebar : () => mixed,
    dockSidebar: () => mixed,

};

type Configuration = {
    configuration: BarConfig
}

export class Bar extends Component<Props & Configuration> {

  render() {
    const { classes } = this.props;
    return (
      <AppBar
        position="static"
        color="default"
        classes={{
          root: classes.root
        }}>
        <Toolbar>
          <Hidden smDown>
            <IconButton
              className={classes.menuButton}
              onClick={() => this.props.dockSidebar()}
              color="inherit"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              onClick={() => this.props.openSidebar()}
              color="inherit"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {/*Title*/}
          </Typography>
          <div className={classes.barChip}>
            <BlockComponent blockName='Chip' />
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
        {
          openSidebar, dockSidebar
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Bar)));
