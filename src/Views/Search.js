import React from 'react';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';
import SearchInput from '../Components/SearchInput';
import UserCard from '../Components/UserCard';
import { addFriend, AddFriend } from '../services/friendsService';
import { makeRequest } from '../services/requestsService';
import { getUsers } from '../services/userService';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            query: "",
            users: []
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

    handleSearch = async () => {
        const { query } = this.state;
        const { data: users } = await getUsers(query);
        this.setState({ users });
    }

    handleCall = (id) => {
        console.log(id);
    }

    handleFriendRequest = async (id) => {
        const { data: result } = await makeRequest({ friendId: id });
        console.log(result);
    }

    render() {
        const { users } = this.state;
        return <>
            <Navbar title={"Search"} />
            <div className="px-3 pt-2">
                <SearchInput
                    name="query"
                    placeholder="Search for users"
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChange}
                    onSearch={this.handleSearch} />
                {users.length === 0 ? null : <Label text="Results" />}
                {users.map((user, key) =>
                    <UserCard
                        id={user._id}
                        key={key}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        avatarColor={user.avatarColor}
                        avatarName={user.avatarName}
                        onFriendRequest={this.handleFriendRequest}
                        onCall={this.handleCall}
                    />)
                }
            </div>
        </>;
    }
}

export default Search;