import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { setJwt } from '../services/authService';
import * as userService from "../services/userService";


class Register extends Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        errors: {}
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const data = { ...this.state.data };
        data[name] = value;
        this.setState({
            data,
            errors: {}
        });
    }


    validate = () => {
        const errors = {};
        const { email, password, firstName, lastName } = this.state.data;
        if (email.trim() === "")
            errors.email = "Email cannot be empty";
        if (firstName.trim() === "")
            errors.firstName = "Enter your first name";
        if (lastName.trim() === "")
            errors.lastName = "Enter your last name";
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
                const response = await userService.register(this.state.data);
                localStorage.setItem('token', response.headers['x-auth-token']);
                setJwt();
                this.props.history.push("/");
            } catch (ex) {
                if (ex.response && ex.response.status === 400) {
                    console.log(ex.response.data);
                    this.setState({ errors: { email: ex.response.data }, isLoading: false });
                }
            }
        }
    }

    render() {
        const { data: user, errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="px-6 py-3 w-full absolute transform -translate-y-1/2 top-1/2">
                <h1 className="text-3xl text-center mb-4">ProjectX</h1>
                <Input value={user.firstName} error={errors.firstName} onChange={this.handleChange} name="firstName" label="First name" placeholder="First name..." />
                <Input value={user.lastName} error={errors.lastName} onChange={this.handleChange} name="lastName" label="Last name" placeholder="Last name..." />
                <Input value={user.email} error={errors.email} onChange={this.handleChange} label="Email" name="email" placeholder="email" type="email" />
                <Input value={user.password} error={errors.password} onChange={this.handleChange} label="Password" name="password" placeholder="password" type="password" />
                <Button title="Register" iconName="lock" type="submit" />
                <Link to="/login">
                    <p className="mt-6 text-center text-blue-500" >Already have an acccount? Login!</p>
                </Link>
            </form>
        );
    }
}

export default Register;