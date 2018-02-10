// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';

// $FlowFixMe
import styles from '../../customization/styles/Login.less';
import { Form, Button, Message } from 'semantic-ui-react';
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

  onSubmit = () => {
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
    const { data, errors, loading } = this.state;
    return (
      <Form className={styles.login} onSubmit={this.onSubmit} loading={loading}>
        <h1> Login </h1>
        {errors.global &&
          <Message negative>
            <Message.Header>Something went wrong!</Message.Header>
            <p>{ errors.global }</p>
          </Message>}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError error={errors.email}/>}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={this.onChange}/>
          {errors.password && <InlineError error={errors.password}/>}
        </Form.Field>
        <Button primary> Login </Button>
      </Form>
    );
  }
}

export default injectConfigs(LoginForm);
