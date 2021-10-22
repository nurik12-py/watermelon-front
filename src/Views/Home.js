import React, { Component } from 'react';
import MainNavbar from '../Components/MainNavbar';
import CanvasAnimation from '../Components/CanvasAnimation';
import { getUser } from '../services/userService';
import Navigation from '../Components/Navigation';
import CallModal from '../Components/CallModal';
import { io } from "socket.io-client";
import ringtone from "../assets/ringtone.mp3";
import { getRequests } from '../services/requestsService';

class Home extends Component {
    state = {
        user: {
            "avatarName": "bat",
            "avatarColor": "ffffff"
        },
        friends: [
            {
                "avatarName": "camel",
                "avatarColor": "aa2b1d",
                "email": "Water"
            },
        ],
        caller: '',
        requestCount: 0,
        isCallModalOpen: false
    }

    audio = new Audio(ringtone);


    componentDidMount = async () => {
        const { data: user } = await getUser();
        const { data: requests } = await getRequests();
        const socket = io("http://localhost:4000");
        socket.on("connect", () => {
            socket.emit("join", { id: socket.id, email: user.email });
        });
        socket.on("onCall", (data) => {
            const { caller } = data;
            this.audio.play();
            this.setState({ isCallModalOpen: true, caller });
            console.log(data);
        });
        this.setState({ user, socket, requestCount: requests.length });
    }

    handleCallModalClose = () => {

        this.setState({ isCallModalOpen: false });
    }

    handleAcceptCall = () => {
        this.audio.pause();
        const { socket, caller } = this.state;
        socket.emit('accept', { caller });
        window.location = "/room/watermelon";
    }

    handleRejectCall = () => {
        this.audio.pause();
        const { socket, caller } = this.state;
        socket.emit('reject', { caller });
        this.setState({ isCallModalOpen: false });
    }

    render() {
        const { user, friends, isCallModalOpen, caller, requestCount } = this.state;
        return (
            <div className="h-full w-full">
                <CallModal isOpen={isCallModalOpen} caller={caller} onAccept={this.handleAcceptCall} onReject={this.handleRejectCall} onClose={this.handleCallModalClose} />
                <MainNavbar title={"What?Melon!"} />
                <CanvasAnimation user={user} friends={friends} orbitRadius="90" circleRadius="25" numberOfPeople={friends.length} imageHeight={40} imageWidth={40} />
                <Navigation requestsCount={requestCount} />
            </div >
        );
    }
}

export default Home;