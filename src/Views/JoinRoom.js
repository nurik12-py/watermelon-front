import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
import SearchResultCard from '../Components/SearchResultCard';
import { getRooms } from "../services/roomService";

class JoinRoom extends Component {
    state = {
        data: {
            query: ""
        },
        rooms: [],
        isSearched: false,
    }

    doSearch = async (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const data = { ...this.state.data };
        data[name] = value;
        this.setState({
            data,
        });
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(async () => {
            console.log("Do search!");
            const { data: rooms } = await getRooms(value);
            this.setState({ rooms, isSearched: true });
        }, 900);
    }

    render() {
        const { query } = this.state.data;
        const { rooms, isSearched } = this.state;
        return (
            <div>
                <Navbar title={"Join room"} />
                <div className="px-2 py-3">
                    <SearchBar name="query" onChange={this.doSearch} value={query} placeholder="Search room or Enter room code" />
                    {rooms.length > 1 && isSearched ?
                        <div>
                            <p className="text-gray-500 mt-2">Found {rooms.length} rooms</p>
                            {rooms.map(room => <SearchResultCard isPrivate={room.isPrivate} roomName={room.name} roomId={room.roomId} />)}
                        </div>
                        : <div>
                            {rooms.length == 0 && isSearched ?
                                <div>Some cute pic</div> :
                                <div></div>
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default JoinRoom;