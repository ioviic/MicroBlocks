import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { BlockComponent } from '../SDK';

const styles = theme => ({ });

class LoginView extends React.Component {
  render() {
    return (
          <BlockComponent blockName='Login'/>
    );
  }
}

export default withStyles(styles)(LoginView);
