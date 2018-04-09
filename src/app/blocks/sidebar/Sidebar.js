//@flow
import React, { Component } from 'react';
import SidebarLinks from './SidebarLinks';
import { BlockComponent } from '../../../SDK';

import type { State } from '../../../stateManagement/types/state';
import { toggleHeader, toggleSidebar } from './actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SidebarConfig from './SidebarConfig';
import injectConfigs from '../../../configurations/ConfigurationHOC';

import { Drawer, Hidden } from 'material-ui';
import image from '../../customization/sidebar-2.jpg';
import { withStyles } from 'material-ui/styles';
import { SideBarStyles as styles } from '../../customization/styles/Sidebar';

type Props = {
  sidebar: *,
  classes: any,
  toggleHeader: () => mixed,
  toggleSidebar: () => mixed,
};

type Configuration = {
  configuration: SidebarConfig
}

class Sidebar extends Component<Props & Configuration> {

  handleDrawerToggle = () => {
    this.props.toggleSidebar()
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          anchor={'left'}
          open={false}
          >

          <div className={classes.wrapper}>
            {/*Extract this/header into different Block*/}
            {this.props.sidebar.showHeader &&
            <BlockComponent block='Branding' />
            }
            <SidebarLinks routes={this.props.sidebar.routes}/>
            <div>
              <button key="increment" onClick={() => this.props.toggleHeader()}>
                Toggle Header
              </button>
            </div>
            <div className={classes.sidebarChip}>
              <BlockComponent block='Chip'/>
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
            open={this.props.sidebar.showSidebar}
            onClose={this.handleDrawerToggle}
          >

            <div className={classes.wrapper}>
              {/*Extract this/header into different Block*/}
              {this.props.sidebar.showHeader &&
              <BlockComponent block='Branding' />
              }
              <SidebarLinks routes={this.props.sidebar.routes}/>
              <div>
                <button key="increment" onClick={() => this.props.toggleHeader()}>
                  Toggle Header
                </button>
              </div>
              <div className={classes.sidebarChip}>
                <BlockComponent block='Chip'/>
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
      toggleHeader,
      toggleSidebar
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Sidebar)));
