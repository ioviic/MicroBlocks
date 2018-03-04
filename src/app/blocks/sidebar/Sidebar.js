import React, { Component } from 'react';
import SidebarLinks from './SidebarLinks';

import { logoutAction } from '../login/actions';

import { toggleHeader } from './actions';
import type { State } from '../../../stateManagement/types/state';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SidebarConfig from './SidebarConfig';
import injectConfigs from '../../../configurations/ConfigurationHOC';

import { Drawer, Avatar, ButtonBase, Menu, MenuItem } from 'material-ui';
import image from '../../customization/sidebar-2.jpg';
import { withStyles } from 'material-ui/styles';
import { SideBarStyles as styles } from '../../customization/styles/Sidebar';

type Props = {
  sidebar: *,
  login: *,
  toggleHeader: () => mixed,
  classes: any,
};

type SidebarState = {
  anchorEl: *;
}

type Configuration = {
  configuration: SidebarConfig
}

class Sidebar extends Component<Props & Configuration, SidebarState> {
  state:SidebarState = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleLogoutClick = event => {
    this.setState({ anchorEl: null});
    this.props.logoutAction();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
          <Drawer
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
            anchor={'left'}>

            <div className={classes.wrapper}>
              {this.props.sidebar.showHeader &&  <h1> Header </h1>}
              <SidebarLinks routes={this.props.sidebar.routes}/>
              <div>
                <button key="increment" onClick={() => this.props.toggleHeader()}>
                  Toggle Header
                </button>
              </div>
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
                getContentAnchorEl={null}
                >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
                </Menu>
                </div>
              }
            </div>

            {image !== undefined && <div className={classes.background} style={{backgroundImage: "url("+image+")"}} />}

          </Drawer>
    );
  }
}
const mapStateToProps = ({ sidebar, login }: State) => ({
  sidebar,login
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      toggleHeader,
      logoutAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Sidebar)));
