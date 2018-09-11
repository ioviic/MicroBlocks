import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { BlockComponent } from '../SDK';

const styles = theme => ({ });

class LoginView extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item md={12}>
          <BlockComponent blockName='Login'/>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(LoginView);
