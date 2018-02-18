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

const drawerWidth = 240;
const styles = theme => ({
  pageWrapper:{
    position: 'relative',
    top: '0',
    height: '100vh',
  },
  mainPanel:{
    width: `calc(100% - ${drawerWidth}px)`,
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    maxHeight: '100%',
  },
  container:{
    padding:'30px 15px'
  }
});

const appRoutes = [
  { path: "/login", sidebarName: "List", navbarName: "Table List", icon: DraftsIcon , component: LoginView },
  { path: "/dashboard", sidebarName: "List2", navbarName: "Table List", icon: DraftsIcon , component: DashboardView },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
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
        <div className={classes.content}>
          <div className={classes.container}>
            {switchRoutes}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withStyles(styles)(HomePage);
