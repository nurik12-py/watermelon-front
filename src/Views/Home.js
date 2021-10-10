import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../Components/Button';
import MainNavbar from '../Components/MainNavbar';
import CanvasAnimation from '../Components/CanvasAnimation';
import { getUser } from '../services/userService';

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
            {
                "avatarName": "badger",
                "avatarColor": "f45fad",
                "email": "Sam"
            },
            {
                "avatarName": "chinchilla",
                "avatarColor": "012e3e",
                "email": "Water"
            }
        ]
    }
    componentDidMount = async () => {
        const { data: user } = await getUser();
        this.setState({ user });
    }
    render() {
        const { user, friends } = this.state;
        return (
            <div className="h-full w-full">
                <MainNavbar title={"What?Melon!"} />
                <CanvasAnimation user={user} friends={friends} orbitRadius="90" circleRadius="25" numberOfPeople={friends.length} imageHeight={40} imageWidth={40} />

                {/* <p className="text-center text-lg">Join or Create a room to chat with friends</p> */}

                <nav className="w-full absolute bottom-0 h-16 pt-1 px-3 bg-white border-t border-gray-200 flex justify-around items-center">
                    <Link to="/search" className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>Search</span>
                    </Link>
                    <Link to="/rooms" className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Rooms</span>
                    </Link>
                    <Link to="/friends" className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Friends</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Profile</span>
                    </Link>
                </nav>
            </div >
        );
    }
}

export default Home;