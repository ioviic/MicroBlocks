// @flow
import React, { Component } from 'react';
import {
  withStyles, Card, CardHeader, CardContent, CardActions
} from '@material-ui/core';

import { StandardCardStyles as styles } from '../customization/styles/Components.js';

type Props = {
  title: string,
  subHeader: string,
  content: any,
  actions: any,
  plain: boolean, // make background transparent
  classes: any,
};

class StandardCard extends Component<Props> {

  render () {
    const {title, subHeader, content, actions, plain, classes } = this.props;
    return (
      <Card className={classes.card + (plain ? " " + classes.plain:"")}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            subheader: classes.cardSubtitle,
          }}
          title={title}
          subheader={subHeader}
        />
        <CardContent>
          {content}
        </CardContent>
        {actions &&
          <CardActions>
            {actions}
          </CardActions>}
      </Card>
    );
  }
}

export default withStyles(styles)(StandardCard);
