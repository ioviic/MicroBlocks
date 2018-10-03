import React from 'react';
import { BlockComponent } from '../SDK';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import LoginView from './LoginView';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Grid} from '@material-ui/core';
import DashboardView from './DashboardView';
import { SDK } from '../SDK/starter';
import { isLoggedIn } from '../app/blocks/login/api';

const drawerWidth = 240;
const styles = theme => ({
  pageWrapper:{
    position: 'relative',
    top: '0',
    height: '100vh',
    backgroundColor: '#eee'
  },
  mainPanel:{
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    width: '100%',
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    maxHeight: '100%',
  },
  mainPanelBig:{
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - 80px)`,
    },
    width: '100%',
    overflow: 'auto',
    position: 'relative',
    maxHeight: '100%',
  },
  container:{
    padding:'30px 30px'
  }
});

const appRoutes = [
  { path: "/login", sidebarName: "List", loginRedirect: "/dashboard", icon: DraftsIcon , component: LoginView },
  { path: "/dashboard", sidebarName: "List2", loginRedirect: "", icon: DraftsIcon , component: DashboardView },
  { redirect: true, path: "/", to: "/login", loginRedirect: ""}
];

// TODO use only one array of routes
const sidebarRoutes = [
  { path: "/login", sidebarName: "Login", icon: DraftsIcon },
  { path: "/dashboard", sidebarName: "Dashboard", icon: DraftsIcon },
  { redirect: true, path: "/", to: "/login" }
];


const switchRoutes=(isLoggedIn) => (<Switch>
  {
    appRoutes.map((prop,key) => {

      if(prop.redirect)
        return (
          <Redirect from={prop.path} to={prop.to} key={key}/>
        );

      if(!!prop.loginRedirect && isLoggedIn)
        return (
          <Redirect from={prop.path} to={prop.loginRedirect} key={key}/>
        );

      return (
        <Route path={prop.path} component={prop.component} key={key}/>
      );
    })
  }
</Switch>);

type Props = {
  classes: any
};

type State = {
  big: boolean,
  isLoggedIn: boolean
}


class HomePage extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = {big: false, isLoggedIn: false}
  }

  componentDidMount() {
    SDK.getBlock("Bar").then(block =>
      block.api
        .pinSidebar()
        .subscribe(res => {
            this.setState({big: res})
          }
        ));

    SDK.getBlock("Login").then(block =>{
      block.api
        .isLoggedIn()
        .subscribe(res => {
            console.log(res)
          }
        )
    })
  }

  render() {
    const { classes } = this.props;
      return (
        <div className={classes.pageWrapper}>
          <BlockComponent blockName='Sidebar' routes={sidebarRoutes} />
          <div className={classes.mainPanel +(this.state.big ? "":" " + classes.mainPanelBig)} ref='mainPanel'>
            <Grid container>
              <BlockComponent blockName='Bar'/>
              {/*<div className={classes.container}>*/}
              <Grid item xs={12}>
                {switchRoutes(this.state.isLoggedIn)}
              </Grid>
              {/*</div>*/}
            </Grid>
          </div>
        </div>
      )
  }
}

export default withStyles(styles)(HomePage);
