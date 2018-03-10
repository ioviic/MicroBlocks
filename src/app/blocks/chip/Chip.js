// @flow
import React, { Component } from 'react';

import injectConfigs from '../../../configurations/ConfigurationHOC';
import ChipConfig from './ChipConfig';

import type { State } from '../../../stateManagement/types/state';
import { logoutAction } from '../login/actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { Avatar, ButtonBase, Menu, MenuItem } from 'material-ui';

import { withStyles } from 'material-ui/styles/index';
import { ChipStyles as styles } from '../../customization/styles/Chip';

type Props = {
  login: *,
  classes: any,
  logoutAction: () => mixed,
};

type Configuration = {
    configuration: ChipConfig
}

type ChipState = {
  anchorEl: *;
  redirect: boolean;
}

export class Chip extends Component<Props & Configuration, ChipState> {
  state:ChipState = {
    anchorEl: null,
    redirect: false
  };

  handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleLogoutClick = () => {
    this.props.logoutAction();
    this.setState({ anchorEl: null, redirect: true});
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, redirect } = this.state;
    return (
      <div>
      {this.props.login.token &&
      <div>
        <ButtonBase className={classes.userChip} onClick={this.handleClick}>
          <div className={classes.userInfo}>
            <span className={classes.userName}>{this.props.login.email}</span>
            <span className={classes.userEmail}>{this.props.login.email}</span>
          </div>
          <Avatar className={classes.userAvatar}>MB</Avatar>
        </ButtonBase>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          getContentAnchorEl={null}>

          {/*<MenuItem onClick={this.handleClose}>Profile</MenuItem>*/}
          {/*<MenuItem onClick={this.handleClose}>My account</MenuItem>*/}
          <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </div>}
      {!this.props.login.token && redirect && <Redirect to='/login'/>}
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
          logoutAction
            // increment,
            // decrement,
            // incrementIfEven,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Chip)));
