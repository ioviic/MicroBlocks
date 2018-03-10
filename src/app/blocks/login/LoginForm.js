// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import {
  withStyles, Card, FormControl, InputLabel, Input,Button, Grid
} from 'material-ui';
import { Clear } from 'material-ui-icons';
// $FlowFixMe
import styles from '../../customization/styles/Login.js';
// import { Form, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from './InlineError';
import type { Configuration } from './Login';
import type { FormData } from './actions';

type LoginState = {
  data: FormData;
  loading: boolean;
  errors: FormData & {global: string};
}

type Props = {
  submit: (data: FormData) => any,
  classes: any
};

class LoginForm extends Component<Props & Configuration, LoginState> {
  state: LoginState = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {
      email: '',
      password: '',
      global: ''
    }
  };

  onChange = (e: *) => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (!errors.email && !errors.password) {
      this.setState({ loading: true });
      this.props.submit(this.state.data)
        .catch(err => {
          this.setState({ errors: { ...errors, global: err.response.data.errors.global }, loading: false } );
        } );
    }
  };

  validate = (data: FormData) => {
    const errors = this.state.errors;

    errors.email = (!Validator.isEmail(data.email)) ? 'Invalid email.' : '';
    errors.password = (!data.password) ? 'Cant be blank' : '';

    return errors;
  };

  render () {
    const { data, errors } = this.state;
    const { classes } = this.props;
    return (
      <Grid container className={classes.login}>
        <Card className={classes.card}>
          <form className={styles.login} onSubmit={this.onSubmit}>
          <h1> Login </h1>
          {errors.global && <InlineError className={classes.labelError} error={errors.global}/>}

          <FormControl error={!!errors.email}>
            <InputLabel>
              {"Email"}
            </InputLabel>
            <Input
              classes={{
                disabled: classes.disabled,
                underline: classes.underline,
              }}
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <Clear className={classes.labelClear}/>}
            {errors.email && <InlineError className={classes.labelError} error={errors.email}/>}
          </FormControl>
          <br/>
          <FormControl error={!!errors.password}>
            <InputLabel>
              {"Password"}
            </InputLabel>
            <Input
              classes={{
                disabled: classes.disabled,
                underline: classes.underline,
              }}
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError className={classes.labelError} error={errors.password}/>}
          </FormControl>
          <br/>
          <Button type="submit" className={classes.button} variant="raised" onClick={this.onSubmit}> Login </Button>
        </form>
        </Card>
      </Grid>
    );
  }
}

export default injectConfigs(withStyles(styles)(LoginForm));
