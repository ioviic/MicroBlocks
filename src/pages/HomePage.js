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
import {Grid} from 'material-ui';
import DashboardView from './DashboardView';

const drawerWidth = 240;
const styles = theme => ({
  pageWrapper:{
    position: 'relative',
    top: '0',
    height: '100vh',
    backgroundColor: '#eee'
  },
  mainPanel:{
    width: `calc(100% - ${drawerWidth}px)`,
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    maxHeight: '100%',
  },
  container:{
    padding:'30px 30px'
  }
});

const appRoutes = [
  { path: "/login", sidebarName: "List", navbarName: "Table List", icon: DraftsIcon , component: LoginView },
  { path: "/dashboard", sidebarName: "List2", navbarName: "Table List", icon: DraftsIcon , component: DashboardView },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
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
    <div className={classes.pageWrapper}>
      <BlockComponent block='Sidebar'/>
      <div className={classes.mainPanel} ref='mainPanel'>
        <Grid container>
          <BlockComponent block='Bar'/>
          {/*<div className={classes.container}>*/}
            <Grid item xs={12}>
            {switchRoutes}
            </Grid>
          {/*</div>*/}
        </Grid>
      </div>
    </div>
    )
  }
}

export default withStyles(styles)(HomePage);
