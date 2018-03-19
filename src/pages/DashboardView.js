import React from 'react';
import { withStyles } from 'material-ui/styles';
import { BlockComponent } from '../SDK';

const styles = theme => ({
});

class DashboardView extends React.Component {
  render() {

    return (
      <div>
        <BlockComponent block='App' />
      </div>
    );
  }
}

export default withStyles(styles)(DashboardView);
