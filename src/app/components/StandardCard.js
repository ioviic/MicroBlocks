// @flow
import React, { Component } from 'react';
import {
  withStyles, Card, CardHeader, CardContent, Grid, CardActions
} from 'material-ui';

import { StandardCardStyles as styles } from '../customization/styles/Components.js';

type Props = {
  title: string,
  subHeader: string,
  content: any,
  actions: any,
  classes: any,
};

class StandardCard extends Component<Props> {

  render () {
    const {title, subHeader, content, actions, classes } = this.props;
    return (
      <Card className={classes.card}>
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
