// @flow
import React, { Component } from 'react';

import {withStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import { TableStyles as styles } from '../customization/styles/Components.js';

type Props = {
  headerTitles: Array<string> ,
  tableRows: Array<Array<string>>,
  classes: any,
};

class TableList extends Component<Props> {

  render () {
    const {headerTitles, tableRows, classes } = this.props;
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {
              headerTitles.map((prop,key) => {
                return (
                  <TableCell
                    className={classes.headerCell +' '+ classes.tableCell }
                    key={key}>
                    {prop}
                  </TableCell>
                );
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableRows.map((prop,key) => {
              return (
                <TableRow
                  className={classes.tableRow}
                  key={key}
                >
                  {
                    prop.map((prop,key) => {
                      return (
                        <TableCell
                          className={classes.tableCell}
                          key={key}>
                          {prop}
                        </TableCell>
                      );
                    })
                  }
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(TableList);
