// @flow
import React, { Component } from 'react';

import injectConfigs from '../../../configurations/ConfigurationHOC';
import BrandingConfig from './BrandingConfig';

import { connect } from 'react-redux';
import type { State } from '../../../stateManagement/types/state';

import { withStyles } from '@material-ui/core/styles';

// import locale from './localizations/translations';
// import { FormattedMessage } from 'react-intl';

import { BrandingStyles as styles} from '../../customization/styles/Branding';
import logo from '../../../logo.svg';

type Props = {
    app: number,
    classes: any
};

type Configuration = {
    configuration: BrandingConfig
}

export class Branding extends Component<Props & Configuration> {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.logo}>
        <a href='/' className={classes.logoLink}>
          <div className={classes.logoImage}>
            <img src={logo} alt="logo" className={classes.img}/>
          </div>
          <div className={classes.brandText}>
            {this.props.configuration.BrandText &&
              <span className={classes.text}>{this.props.configuration.BrandText}</span>}

            {this.props.configuration.BrandSubtext &&
              <span className={classes.subtext}>{this.props.configuration.BrandSubtext}</span>}
          </div>
        </a>
      </div>
    );
  }
}

const mapStateToProps = ({ branding }: State) => ({
   branding,
});

const mapDispatchToProps = (dispatch: *) => ({}); // use bindActionCreators() if needed

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(withStyles(styles)(Branding)));
