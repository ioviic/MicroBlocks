import React, { Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon} from 'material-ui';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles/index';

type Props = {
  routes: [],
  classes: any,
};

const styles = theme => ({
  item:{
    padding: '10px 15px',
    width: '100%',
    float: 'left'
  },

  itemLink:{
    WebkitTransition: 'all 300ms linear',
    MozTransition: 'all 300ms linear',
    OTransition: 'all 300ms linear',
    MsTransition: 'all 300ms linear',
    transition: 'all 300ms linear',
    padding: '10px 15px',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: '#00acc1',
      boxShadow: '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
    }
  },

  itemText: {
    color: '#FFFFFF',
    h3:{
      color:'#fffff'
    }
  },

  itemIcon: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

class SidebarLinks extends Component<Props> {
  render() {
    const { classes, routes } = this.props;

    return (
      <List className={classes.list}>
        {
          routes.map((prop,key) => {
            if(prop.redirect) return null;
            return (
              <NavLink to={prop.path} className={classes.item} activeClassName="active" key={key}>
                <ListItem button className={classes.itemLink}>
                  <ListItemIcon className={classes.itemIcon}>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText primary={prop.sidebarName} className={classes.itemText} disableTypography={true}/>
                </ListItem>
              </NavLink>
            );
          })
        }
      </List>
    );
  }
}

export default withStyles(styles)(SidebarLinks);
