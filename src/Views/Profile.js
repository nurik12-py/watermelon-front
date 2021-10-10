import React, { Component } from 'react';
import Avatar from '../Components/Avatar';
import Button from '../Components/Button';
import Input from '../Components/Input';
import ProfileNavbar from '../Components/ProfileNavbar';
import { getUser } from '../services/userService';
import * as userService from "../services/userService";

class Profile extends Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            avatarName: "alligator"
        },
        dataChanged: false,
        errors: {},
        isLoading: true
    }

    componentDidMount = async () => {
        const { data: user } = await getUser();
        this.setState({ data: user, isLoading: false });
        console.log(user);
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const data = { ...this.state.data };
        data[name] = value;
        this.setState({
            data,
            errors: {},
            dataChanged: true
        });
    }

    validate = () => {
        const errors = {};
        const { firstName, lastName } = this.state.data;
        if (firstName.trim() === "")
            errors.firstName = "Enter your first name";
        if (lastName.trim() === "")
            errors.lastName = "Enter your last name";
        return Object.keys(errors).length === 0 ? null : errors;
    }

    setRandomAvatarName = () => {
        const avatarNames = ['alligator', 'anteater', 'armadillo', 'auroch', 'axolotl', 'badger', 'bat', 'beaver', 'buffalo', 'camel', 'chameleon', 'cheetah', 'chipmunk', 'chinchilla', 'chupacabra', 'cormorant', 'coyote', 'crow', 'dingo', 'dinosaur', 'dolphin', 'duck', 'dragon', 'elephant', 'ferret', 'fox', 'frog', 'giraffe', 'gopher', 'grizzly'];
        const avatarColors = ['4f46e5', '2563eb', 'd97706', '059669', '7c3aed'];
        const randomAvatarName = avatarNames[Math.floor(Math.random() * avatarNames.length)];
        const avatarColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
        const data = { ...this.state.data };
        data["avatarName"] = randomAvatarName;
        data["avatarColor"] = avatarColor;
        this.setState({ data, dataChanged: true });
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (Object.keys(errors || {}).length === 0) {
            try {
                const response = await userService.updateUser(this.state.data);
                window.location = "/profile";
            } catch (ex) {
                console.log(ex.response.data);
            }
        }
    }

    render() {
        const { data: user, errors, dataChanged, isLoading } = this.state;
        return (
            <div>
                <ProfileNavbar title={"Profile"} />
                <form onSubmit={this.handleSubmit} className="px-4 py-3">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <Avatar avatarName={user.avatarName} color={user.avatarColor} />
                        <Button title="Random avatar" iconName="shuffle" onClick={() => this.setRandomAvatarName()} />
                    </div>
                    <Input showLoadingAnimation={isLoading} onChange={this.handleChange} value={user.email} name="email" label="Email" placeholder="Email" disabled={true} />
                    <Input showLoadingAnimation={isLoading} onChange={this.handleChange} error={errors.firstName} value={user.firstName} name="firstName" label="First name" placeholder="First name..." />
                    <Input showLoadingAnimation={isLoading} onChange={this.handleChange} error={errors.lastName} value={user.lastName} name="lastName" label="Last name" placeholder="Last name..." />
                    {dataChanged && <Button title="Save" type="submit" />}
                </form>
            </div>
        );
    }
}

export default Profile;