import React from 'react';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';
import UserCard from '../Components/UserCard';
import UserRequestCard from '../Components/UserRequestCard';
import { addFriend, getFriends, removeFriend } from '../services/friendsService';
import { getRequests, rejectRequest } from '../services/requestsService';
import { getUser } from '../services/userService';
import { EmojiHappyIcon } from "@heroicons/react/outline";
import UserLoadingCard from '../Components/UserLoadingCard';
import { io } from "socket.io-client";
import { Link } from 'react-router-dom';

class Friends extends React.Component {
    state = {
        friends: [],
        requests: [],
        isLoading: true,
    }
    async componentDidMount() {
        const { data: requests } = await getRequests();
        const { data: friends } = await getFriends();
        const { data: user } = await getUser();
        const socket = io("http://localhost:4000");

        this.setState({ user, friends, requests, isLoading: false, socket });
    }

    handleRemoveFriend = async (id) => {
        let friends = [...this.state.friends];
        friends = friends.filter(friend => friend._id !== id);
        const { data: result } = await removeFriend(id);
        this.setState({ friends });
    }


    handleCall = (email) => {
        const { socket, user } = this.state;
        socket.emit("call", { email, caller: user.email });
        window.location = '/room/watermelon';
    }

    handleAcceptRequest = async (id) => {
        const { data: result } = await addFriend({ friendId: id });
        let requests = [...this.state.requests];
        let friends = [...this.state.friends];
        requests = requests.map(request => request._id !== id);
        this.setState({ requests, friends });
    }

    handleRejectRequest = async (id) => {
        const { data: result } = await rejectRequest(id);
        let requests = [...this.state.requests];
        requests = requests.filter(request => request._id !== id);
        this.setState({ requests });
    }

    render() {
        const { requests, friends, isLoading } = this.state;
        return (
            <>
                <Navbar title={"Friends"} />
                <div className="px-4 py-4">
                    {isLoading && <div>
                        <UserLoadingCard />
                    </div>}
                    {requests.length !== 0 && <Label text="Friends requests" />}
                    {requests.map(user =>
                        <UserRequestCard
                            id={user._id}
                            email={user.email}
                            onAccept={this.handleAcceptRequest}
                            onReject={this.handleRejectRequest} />
                    )}
                    {friends.length !== 0 && <Label text="Friends" />}
                    {friends.map(friend =>
                        <UserCard
                            email={friend.email}
                            key={friend._id}
                            id={friend._id}
                            avatarColor={friend.avatarColor}
                            avatarName={friend.avatarName}
                            firstName={friend.firstName}
                            lastName={friend.lastName}
                            onRemoveFriend={this.handleRemoveFriend}
                            onCall={this.handleCall}
                            isFriend={true}
                        />)
                    }
                    {friends.length === 0 && requests.length === 0 && !isLoading &&
                        <>
                            <p className="text-center text-lg">No... Friend or Requests yet</p>
                            <Link to="/search">
                                <p className="text-center  text-blue-500 ">Go to Search</p>
                            </Link>
                        </>
                    }
                </div>
            </>
        );
    }
}

export default Friends;