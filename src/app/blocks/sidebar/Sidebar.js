import React, { Component } from 'react';
import SidebarLinks from './SidebarLinks';

import { logoutAction } from '../login/actions';

import { toggleHeader } from './actions';
import type { State } from '../../../stateManagement/types/state';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SidebarConfig from './SidebarConfig';
import injectConfigs from '../../../configurations/ConfigurationHOC';

import { Drawer, Avatar, ButtonBase } from 'material-ui';
import image from '../../customization/sidebar-2.jpg';
import { withStyles } from 'material-ui/styles';
import { SideBarStyles as styles } from '../../customization/styles/Sidebar';

type Props = {
  sidebar: *,
  login: *,
  toggleHeader: () => mixed,
  classes: any,
};

type Configuration = {
  configuration: SidebarConfig
}

class Sidebar extends Component<Props & Configuration> {
  render() {
    const { classes } = this.props;

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
                <ButtonBase className={classes.userChip} onClick={this.props.logoutAction}>
                  <div className={classes.userInfo}>
                    <span className={classes.userName}>{this.props.login.email}</span>
                    <span className={classes.userEmail}>{this.props.login.email}</span>
                  </div>
                  <Avatar className={classes.userAvatar}>MB</Avatar>
                </ButtonBase>
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
