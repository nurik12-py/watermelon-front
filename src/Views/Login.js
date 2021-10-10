import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Input from '../Components/Input';
import * as auth from "../services/authService";

class Login extends Component {

    state = {
        email: "",
        password: "",
        errors: {},
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            errors: {}
        });
    }

    validate = () => {
        const errors = {};
        const { email, password } = this.state;
        if (email.trim() === "")
            errors.email = "Email cannot be empty";
        if (password.trim() === "" || password.trim().length < 8)
            errors.password = "Password must be al least 8 length long";

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (Object.keys(errors || {}).length === 0) {
            try {
                this.setState({ isLoading: true });
                const { email, password } = this.state;
                await auth.login(email, password);
                const { state } = this.props.location;
                window.location = state ? state.from.pathname : "/";
            } catch (ex) {
                if (ex.response && ex.response.status === 400) {
                    console.log(ex.response.data);
                    this.setState({ errors: { email: ex.response.data }, isLoading: false });
                }
            }
        }
    }

    render() {
        const user = this.state;
        const { errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="px-6 py-3 w-full absolute transform -translate-y-1/2 top-1/2">
                <h1 className="text-3xl text-center mb-4">ProjectX</h1>
                <Input value={user.email} error={errors.email} onChange={this.handleChange} label="Email" name="email" placeholder="email" type="email" />
                <Input value={user.password} error={errors.password} onChange={this.handleChange} label="Password" name="password" placeholder="password" type="password" />
                <Button title="Login" iconName="lock" type="submit" />
                <Link to="/register">
                    <p className="mt-6 text-center text-blue-500" >Don't have an acccount? Create new one!</p>
                </Link>
            </form>
        );
    }

}

export default Login;