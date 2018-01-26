// @flow
import React, { Component } from 'react';
import injectConfigs from '../../../configurations/ConfigurationHOC';

// $FlowFixMe
// import styles from '../../customization/styles/App.less';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from './InlineError';
import type { Configuration } from './Login';

type FormData = {
    email: string;
    password: string
}

type LoginState = {
    data: FormData;
    loading: boolean;
    errors: FormData;
}
//
// type Configuration = {
//     configuration: LoginConfig
// }

type Props = {
    submit: (data: FormData) => void,
};

class LoginForm extends Component<Props & Configuration, LoginState> {
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

        if (Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    };

    validate = (data: FormData) => {
        const errors = {};
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

export default injectConfigs(LoginForm);
