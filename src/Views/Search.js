import React, { Component } from 'react';
import Input from '../Components/Input';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            errors: {}
        });
    }

    render() {
        return <div>
            <Navbar title={"Search"} />
            <div className="px-3 pt-2">
                <Input value={this.state.query} onChange={this.handleChange} label="" name="query" placeholder="Search for users or rooms" type="text" />
                <Label text="Users" />
                <div className="mb-4 rounded-md bg-white border border-gray-100 h-16 px-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div alt="" className="w-10 h-10 bg-blue-100 rounded-full"></div>
                        <p className="text-lg">Carl</p>
                    </div>
                </div>
                <Label text="Rooms" />
                <div className="mb-4 rounded-md bg-white border border-gray-100 h-16 px-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div alt="" className="w-10 h-10 bg-blue-100 rounded-full"></div>
                        <p className="text-lg">Carl</p>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Search;