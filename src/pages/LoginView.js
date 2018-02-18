import React from 'react';
import { withStyles } from 'material-ui/styles';
import { BlockComponent } from '../SDK';

const styles = theme => ({
});

class LoginView extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <BlockComponent block='Login'/>
    );
  }
}

export default withStyles(styles)(LoginView);
