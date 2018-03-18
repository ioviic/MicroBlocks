// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import logo from '../../../logo.svg';
import BrandingConfig from './BrandingConfig';
import locale from './localizations/translations';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {
//     increment,
//     decrement,
//     incrementIfEven,
// } from './actions';

import type { State } from '../../../stateManagement/types/state';
import { BrandingStyles as styles} from '../../customization/styles/Branding';
import { withStyles } from 'material-ui/styles/index';

type Props = {
    app: number,
    classes: any
    // increment: (amount: number) => mixed,
    // decrement: (amount: number) => mixed,
    // incrementIfEven: (amount: number) => mixed,
};

type Configuration = {
    configuration: BrandingConfig
}

export class Branding extends Component<Props & Configuration> {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.logo}>
        <a href="/" className={classes.logoLink}>
          <div className={classes.logoImage}>
            <img src={logo} alt="logo" className={classes.img}/>
          </div>
          Micro<b>Blocks</b>
        </a>
      </div>
    );
  }
}

const mapStateToProps = ({ branding }: State) => ({
   branding,
});

const mapDispatchToProps = (dispatch: *) => {{}};
    // bindActionCreators(
    //     // {
    //     //     increment,
    //     //     decrement,
    //     //     incrementIfEven,
    //     },
    //     dispatch
    // );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Branding)));
