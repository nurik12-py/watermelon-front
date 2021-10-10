import React, { Component } from 'react';
import CanvasAnimation from '../Components/CanvasAnimation';
import MicButton from '../Components/MicButton';
import Navbar from '../Components/Navbar';
import { io } from "socket.io-client";
import { getUser } from '../services/userService';
import { pick } from "lodash";
import { getRoom } from '../services/roomService';
import ShareButton from '../Components/ShareButton';


class Room extends Component {

    constructor(props) {
        super(props);
        this.audioRef = React.createRef();

        this.state = {

            isMuted: false,
            user: {
                "avatarName": "bat",
                "avatarColor": "1a508b"
            },
            friends: [],
            ioClient: null,
            room: {
                "name": ""
            }
        }
    }


    setAudio = (stream) => {
        this.audioRef.current.srcObject = stream;
    }

    componentDidMount = async () => {
        const roomId = this.props.location.pathname.split("/")[2];
        const ioClient = io(process.env.REACT_APP_SOCKET_URL);
        const { data: roomData } = await getRoom(roomId);
        const { data: userData } = await getUser();
        const user = pick(userData, ["email", "avatarName", "avatarColor", "_id"]);
        ioClient.emit("join", JSON.stringify({ "roomId": roomId, ...user }));

        ioClient.on("newUser", friends => {
            console.log("New user joined");
            const filteredFriends = friends.filter(friend => friend.email != user.email);
            if (filteredFriends.length > 0) {

            }
            this.setState({ friends: filteredFriends });
        });

        this.setState({ ioClient, user, room: roomData });
    }
    onMute = () => {
        this.setState({ isMuted: !this.state.isMuted });
    }
    handleLeave = () => {
        const roomId = this.props.location.pathname.split("/")[2];
        const data = { email: this.state.user.email, roomId: roomId };
        this.state.ioClient.emit("leave", data);
        this.props.history.push("/");
        console.log("Left");
    }
    render() {
        const { isMuted, friends, user, room } = this.state;
        return (
            <div>
                <Navbar title="Room" isRoom={true} onLeave={this.handleLeave} />
                <CanvasAnimation title={room.name} orbitRadius="90" circleRadius="25" user={user} friends={friends} numberOfPeople={friends.length} imageHeight={40} imageWidth={40} />
                <video ref={this.audioRef} autoPlay={true} />
                <div className="absolute bottom-5 flex items-center justify-center w-full">
                    <div className="mr-3">
                        <MicButton onClick={this.onMute} isMuted={this.state.isMuted} />
                        <p className="text-center">{isMuted ? "Unmute" : "Mute"}</p>
                    </div>
                    <div>
                        <ShareButton />
                        <p className="text-center">Share</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Room;