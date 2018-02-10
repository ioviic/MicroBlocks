// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';

// $FlowFixMe
import styles from '../../customization/styles/Signup.less';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from './InlineError';
import type { Configuration } from './Signup';
import type { FormData } from './actions';

type SignupState = {
  data: FormData;
  loading: boolean;
  errors: FormData & {global: string};
}

type Props = {
  submit: (data: FormData) => any,
};

class SignupForm extends Component<Props & Configuration, SignupState> {
  state: SignupState = {
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
          this.setState({ errors: err.response.data.errors, loading: false } );
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
      <Form className={styles.signup} onSubmit={this.onSubmit} loading={loading}>
        <h1> Signup </h1>
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
        <Button primary> Signup </Button>
      </Form>
    );
  }
}

export default injectConfigs(SignupForm);
