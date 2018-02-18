import React, { Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon} from 'material-ui';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles/index';

type Props = {
  routes: [],
  classes: any,
};

const styles = theme => ({

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
                <ListItem button>
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
