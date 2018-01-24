// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';
import type { LoginConfig } from './LoginConfig';
// import locale from './localizations/translations';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    increment,
    decrement,
    incrementIfEven,
} from './actions';

import type { State } from '../../../stateManagement/types/state';
// $FlowFixMe
// import styles from '../../customization/styles/App.less';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from './InlineError';

type Props = {
    login: number,
    increment: (amount: number) => mixed,
    decrement: (amount: number) => mixed,
    incrementIfEven: (amount: number) => mixed,
};

type FormData = {
    email: string;
    password: string
}

type LoginState = {
    data: FormData;
    loading: boolean;
    errors: FormData;
}

type Configuration = {
    configuration: LoginConfig
}

export class Login extends Component<Props & Configuration, LoginState> {
    state: LoginState= {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {
            email: '',
            password: ''
        }
    };

    onChange = (e: *) => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
    };

    validate = (data: FormData) => {
        const errors = {};
        console.log(data);
        if (!Validator.isEmail(data.email)) {
            errors.email = 'Invalid email.';
        }

        if (!data.password) {
            errors.password = 'Cant be blank';
        }

        return errors;
    };

  render() {
      const { data, errors } = this.state;
    return (
        <Form onSubmit={this.onSubmit}>
            <Form.Field error = {!!errors.email}>
                <label htmlFor="email"> Email </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={this.onChange}
                />
                { errors.email && <InlineError error = { errors.email } /> }
            </Form.Field>
            <Form.Field error = {!!errors.password}>
                <label htmlFor="password"> Password </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={this.onChange}/>
                { errors.password && <InlineError error = { errors.password } /> }
            </Form.Field>
            <Button primary> Login </Button>
        </Form>
    );
  }
}

const mapStateToProps = ({ login }: State) => ({
    login,
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            increment,
            decrement,
            incrementIfEven,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(injectConfigs(Login));
