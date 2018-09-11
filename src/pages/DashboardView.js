import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BlockComponent } from '../SDK';

const styles = theme => ({
});

class DashboardView extends React.Component {
  render() {

    return (
      <div>
        <BlockComponent blockName='App' />
      </div>
    );
  }
}

export default withStyles(styles)(DashboardView);
