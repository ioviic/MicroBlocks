//@flow
import React, { Component } from 'react';
import SidebarLinks from './SidebarLinks';
import { BlockComponent } from '../../../SDK';

import { toggleHeader } from './actions';
import type { State } from '../../../stateManagement/types/state';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SidebarConfig from './SidebarConfig';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import { Drawer } from 'material-ui';
import image from '../../customization/sidebar-2.jpg';
import { withStyles } from 'material-ui/styles';
import { SideBarStyles as styles } from '../../customization/styles/Sidebar';

type Props = {
  sidebar: *,
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

          {/*ADD here chip block*/}
          <BlockComponent block='Chip'/>

        </div>

        {image !== undefined && <div className={classes.background} style={{backgroundImage: "url("+image+")"}} />}

      </Drawer>
    );
  }
}
const mapStateToProps = ({ sidebar }: State) => ({
  sidebar
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      toggleHeader
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Sidebar)));
