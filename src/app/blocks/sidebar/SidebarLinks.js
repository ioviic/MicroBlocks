import React, { Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { SideBarLinksStyles as styles} from '../../customization/styles/Sidebar';

type Props = {
  routes: [],
  classes: any,
  closeMethod: () => mixed
};

class SidebarLinks extends Component<Props> {
  render() {

    const { classes, routes } = this.props;

    return (
      <List className={classes.list}>
        {
          routes.map((prop,key) => {
            if(prop.redirect) return null;
            return (
              <NavLink to={prop.path} className={classes.itemLink} activeClassName={classes.active} onClick={()=>this.props.closeMethod()} key={key}>
                <ListItem button className={classes.item}>
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
