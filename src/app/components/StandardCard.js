// @flow
import React, { Component } from 'react';
import {
  withStyles, Card, CardHeader, CardContent, Grid, CardActions
} from 'material-ui';
// $FlowFixMe
import styles from '../customization/styles/Login.js';

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
      <Grid container className={classes.login}>
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
          <CardActions>
            {actions}
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(StandardCard);
