import React, { Component } from 'react';
import SidebarLinks from './SidebarLinks';

import { toggleHeader } from './actions';
import type { State } from '../../../stateManagement/types/state';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SidebarConfig from './SidebarConfig';
import injectConfigs from '../../../configurations/ConfigurationHOC';

import { Drawer } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import image from '../../customization/sidebar-2.jpg';

const drawerWidth = 240;

type Props = {
  sidebar: *,
  toggleHeader: () => mixed,
  classes: any,
};

type Configuration = {
  configuration: SidebarConfig
}

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    // marginTop: theme.spacing.unit * 3,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    border: 'none',
    top: '0',
    bottom: '0',
    left: '0',
    position: 'fixed',
    height: '100%',
    width: drawerWidth,
    zIndex: 1,
  },
  wrapper:{
    zIndex: 4
  },
  drawerHeader: theme.mixins.toolbar,
  background: {
    position: 'absolute',
    zIndex: '1',
    height: '100%',
    width: '100%',
    display: 'block',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&:after': {
      position: 'absolute',
      zIndex: '3',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      background: '#000',
      opacity: '.8',
    }
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

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
            </div>

            {image !== undefined && <div className={classes.background} style={{backgroundImage: "url("+image+")"}} />}

          </Drawer>
    );
  }
}
const mapStateToProps = ({ sidebar }: State) => ({
  sidebar,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      toggleHeader,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Sidebar)));
