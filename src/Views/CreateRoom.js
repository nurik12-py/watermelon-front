import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';
import RadioButton from '../Components/RadioButton';
import * as room from "../services/roomService";

class CreateRoom extends Component {
    state = {
        data: {
            name: "",
            isPrivate: true
        },
        errors: {}
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const data = { ...this.state.data };
        data[name] = value;
        console.log(value);
        this.setState({
            data,
            errors: {}
        });
    }

    validate = () => {
        const errors = {};
        const { name } = this.state.data;
        if (name.trim() === "")
            errors.name = "Enter the room name";
        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (Object.keys(errors || {}).length === 0) {
            try {
                const { name, isPrivate } = this.state.data;
                const { data } = await room.createRoom(name, isPrivate);
                window.location = "/room/" + data.roomId;
            } catch (ex) {
                if (ex.response && ex.response.status === 400) {
                    console.log(ex.response.data);
                    this.setState({ errors: { email: ex.response.data } });
                }
            }
        }
    }

    render() {
        const { name } = this.state.data;
        const { errors } = this.state;
        return (
            <div>
                <Navbar title={"Create room"} />
                <form onSubmit={this.handleSubmit} className="px-4 py-3">
                    <Input label="Room name" name="name" error={errors.name} value={name} onChange={this.handleChange} placeholder="Name..." />
                    <Label text="Room type" />
                    <RadioButton name="isPrivate" onChange={this.handleChange} value={true} label="Private" description="Only who have link to room can join the room" />
                    <RadioButton name="isPrivate" onChange={this.handleChange} value={false} label="Public" description="Everyone can join by searching the name of room" />
                    <Button type="submit" title="Create room" iconName="plus" className="mt-4" />
                </form>
            </div>
        );
    }
}

export default CreateRoom;