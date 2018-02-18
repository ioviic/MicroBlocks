import React from 'react';
import { BlockComponent } from '../SDK';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { withStyles } from 'material-ui/styles/index';
import LoginView from './LoginView';
import DraftsIcon from 'material-ui-icons/Drafts';
import DashboardView from './DashboardView';
const styles = theme => ({
  mainPanel:{
    backgroundColor: 'blue'
  }
  // root: {
  //   width: '100%',
  //   height: 430,
  //   // marginTop: theme.spacing.unit * 3,
  //   overflow: 'hidden',
  // },
  // appFrame: {
  //   position: 'relative',
  //   display: 'flex',
  //   width: '100%',
  //   height: '100%',
  // },
  // appBar: {
  //   position: 'absolute',
  //   width: `calc(100% - ${drawerWidth}px)`,
  // },
  // 'appBar-left': {
  //   marginLeft: drawerWidth,
  // },
  // 'appBar-right': {
  //   marginRight: drawerWidth,
  // },
  // drawerPaper: {
  //   border: 'none',
  //   top: '0',
  //   bottom: '0',
  //   left: '0',
  //   position: 'fixed',
  //   height: '100%',
  //   width: drawerWidth,
  //   zIndex: 1,
  // },
  // wrapper:{
  //   zIndex: 4
  // },
  // drawerHeader: theme.mixins.toolbar,
  // itemText: {
  //   color: '#FFFFFF',
  //   h3:{
  //     color:'#fffff'
  //   }
  // },
  //
  // itemIcon: {
  //   color: 'rgba(255, 255, 255, 0.8)',
  // },
  // background: {
  //   position: 'absolute',
  //   zIndex: '1',
  //   height: '100%',
  //   width: '100%',
  //   display: 'block',
  //   top: '0',
  //   left: '0',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center center',
  //   '&:after': {
  //     position: 'absolute',
  //     zIndex: '3',
  //     width: '100%',
  //     height: '100%',
  //     content: '""',
  //     display: 'block',
  //     background: '#000',
  //     opacity: '.8',
  //   }
  // },
  // content: {
  //   backgroundColor: theme.palette.background.default,
  //   width: '100%',
  //   padding: theme.spacing.unit * 3,
  //   height: 'calc(100% - 56px)',
  //   marginTop: 56,
  //   [theme.breakpoints.up('sm')]: {
  //     height: 'calc(100% - 64px)',
  //     marginTop: 64,
  //   },
  // },
});

const appRoutes = [
  { path: "/login", sidebarName: "List", navbarName: "Table List", icon: DraftsIcon , component: LoginView },
  { path: "/dashboard", sidebarName: "List2", navbarName: "Table List", icon: DraftsIcon , component: DashboardView },
  { redirect: true, path: "/", to: "/table", navbarName: "Redirect" }
];

const switchRoutes = (<Switch>
  {
    appRoutes.map((prop,key) => {
      if(prop.redirect)
        return (
          <Redirect from={prop.path} to={prop.to} key={key}/>
        );
      return (
        <Route path={prop.path} component={prop.component} key={key}/>
      );
    })
  }
</Switch>);

class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
    <div>
      <BlockComponent block='Sidebar' appRoutes/>
      <div className={classes.mainPanel} ref='mainPanel'>
        <div className={classes.content}>
          <div className={classes.container}>
            {switchRoutes}
          </div>
        </div>
      </div>
    </div>)
  }
}

export default withStyles(styles)(HomePage);
