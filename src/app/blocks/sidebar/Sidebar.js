//@flow
import React, { Component } from 'react';
import SidebarLinks from './SidebarLinks';
import { BlockComponent } from '../../../SDK';

import type { State } from '../../../stateManagement/types/state';
import {toggleSidebar } from './actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SidebarConfig from './SidebarConfig';
import injectConfigs from '../../../configurations/ConfigurationHOC';

import { Drawer, Hidden } from '@material-ui/core';
import image from '../../customization/sidebar-2.jpg';
import { withStyles } from '@material-ui/core/styles';
import { SideBarStyles as styles } from '../../customization/styles/Sidebar';
import {SDK} from "../../../SDK/starter";

type Props = {
  sidebar: *,
  classes: any,
  toggleSidebar: () => mixed,
  routes: any
};

type Configuration = {
  configuration: SidebarConfig
}

type SidebarState = {
  show: boolean;
  pinSidebar: boolean;
}

class Sidebar extends Component<Props & Configuration, SidebarState> {

  state:SidebarState = {
    show: false,
    pinSidebar:false
  };

  componentDidMount() {
    SDK.getBlock("Bar").then(block =>{
      block.api
        .pinSidebar()
        .subscribe(res => {
            this.setState({pinSidebar: res})
          }
        );

      block.api
        .sidebarOpen()
        .subscribe(res => {
            this.setState({show: res})
          }
        )
    });
  }

  handleDrawerToggle = () => {
    this.setState({show: false})
  };

  toggleSidebar = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          classes={{ paper: classes.drawerPaper + (!this.state.show ? " " + classes.drawerPaperClose:"") + (this.state.pinSidebar ? " "+ classes.drawerPaperOpen : "")}}
          anchor={'left'}
          open
          onMouseOver={this.toggleSidebar}
          onMouseOut={this.toggleSidebar}
          >

          <div className={classes.wrapper}>
            <BlockComponent blockName='Branding' />
            <SidebarLinks routes={this.props.routes}/>
            <div className={classes.sidebarChip}>
              <BlockComponent blockName='Chip'/>
            </div>
          </div>

          {image !== undefined && <div className={classes.background} style={{backgroundImage: "url("+image+")"}} />}

        </Drawer>
      </Hidden>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            classes={{ paper: classes.drawerPaper }}
            anchor={'left'}
            open={this.state.show}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.wrapper}>
              <BlockComponent blockName='Branding' />
              <SidebarLinks routes={this.props.routes} closeMethod={this.toggleSidebar}/>
              <div className={classes.sidebarChip}>
                <BlockComponent blockName='Chip'/>
              </div>

            </div>

            {image !== undefined && <div className={classes.background} style={{backgroundImage: "url("+image+")"}} />}

          </Drawer>
        </Hidden>
      </div>
    );
  }
}
const mapStateToProps = ({ sidebar }: State) => ({
  sidebar
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Sidebar)));
