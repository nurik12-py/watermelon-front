import React, { Component } from 'react';
import MicButton from '../Components/MicButton';
import Navbar from '../Components/Navbar';
import { io } from "socket.io-client";
import { getUser } from '../services/userService';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMuted: false,
            ioClient: null,
            isCalling: false
        }
    }

    componentDidMount = async () => {
        const socket = io("http://localhost:4000");
        const { data: user } = await getUser();
        socket.on("connect", () => {
            socket.emit("join", { id: socket.id, email: user.email });
        });
        socket.on("onReject", () => {
            alert("Your call declined");
            window.location = '/';
        });
        socket.on("onAccept", () => {
            this.setState({ isCalling: false });
        });
    }
    onMute = () => {
        this.setState({ isMuted: !this.state.isMuted });
    }
    handleLeave = () => {
        this.props.history.push("/");
    }
    render() {
        const { isMuted, isCalling } = this.state;
        return (
            <div>
                <Navbar title="What?Melon!" isRoom={true} onLeave={this.handleLeave} />
                <div className="w-full h-full">
                    {!isCalling ?
                        <>
                            <video className="absolute top-16 left-2 w-20 h-28 bg-black rounded-lg"></video>
                            <MicButton className="mr-3 absolute bottom-5 flex flex-col items-center justify-center w-full z-10" onClick={this.onMute} isMuted={this.state.isMuted} />
                        </>
                        :
                        <>
                            <div className="mt-6 flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                                <p>Calling...</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default Room;