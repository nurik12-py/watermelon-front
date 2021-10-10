import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';

class Rooms extends React.Component {
    render() {
        return <div className="">
            <Navbar title={"Rooms"} />
            <div className="px-3 pt-1 ">
                <Label text="Your rooms" />
                <div className="mb-2 rounded-md bg-white border border-gray-100 h-16 px-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <p className="text-lg">Football</p>
                    </div>
                    <Link to="/room/aaa-aaa" className="text-gray-50 bg-blue-500 px-2 py-1 rounded text-sm">Join</Link>
                </div>
                <div className="mb-4 rounded-md bg-white border border-gray-100 h-16 px-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <p className="text-lg">CSS</p>
                    </div>
                    <Link to="/room/aaa-aaa" className="text-gray-50 bg-blue-500 px-2 py-1 rounded text-sm">Join</Link>
                </div>
                <Link to="/create-room">
                    <Button title="Create room" iconName="plus" type="button" />
                </Link>
            </div>
        </div>;
    }
}

export default Rooms;