// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import {
  withStyles, Card, FormControl, InputLabel, Input,Button, Grid
} from 'material-ui';
import {
  Clear, Check
} from 'material-ui-icons';
// $FlowFixMe
// import styles from '../../customization/styles/Login.less';
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

const styles = theme => ({
  login:{
    padding:'18px'
  },
  labelClear:{
    position: 'absolute',
    right: '0',
    top: '18px',
    color: '#f44336'
  },
card: {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  // margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  padding: '10px',
  background: '#fff',
},
  button: {
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '3px',
    position: 'relative',
    padding: '12px 30px',
    margin: '10px 1px',
    fontSize: '12px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',
    cursor: 'pointer',
    backgroundColor: '#9c27b0',
    boxShadow: '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover': {
      backgroundColor: '#9c27b0',
      boxShadow: '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
    }
  },
});

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
    debugger;
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
    const { data, errors, loading } = this.state;
    const { classes } = this.props;
    return (
      <Grid container className={classes.login}>
      <Card className={classes.card}>
      <form className={styles.login} onSubmit={this.onSubmit}>
        <h1> Login </h1>
        {/*{errors.global &&*/}
          {/*<Message negative>*/}
            {/*<Message.Header>Something went wrong!</Message.Header>*/}
            {/*<p>{ errors.global }</p>*/}
          {/*</Message>}*/}

        <FormControl error={errors.email}>
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
          {errors.email && <Clear className={classes.labelClear + " " + classes.labelRootError}/>}
          {errors.email && <InlineError error={errors.email}/>}
        </FormControl>
        <br/>
        <FormControl error={errors.password}>
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
          {errors.password && <InlineError error={errors.password}/>}
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
