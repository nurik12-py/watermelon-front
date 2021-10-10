import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './Views/Login';
import CreateRoom from './Views/CreateRoom';
import Home from './Views/Home';
import JoinRoom from './Views/JoinRoom';
import Profile from './Views/Profile';
import Room from './Views/Room';
import Register from './Views/Register';
import ProtectedRoute from "./Components/ProtectedRoute";
import Logout from "./Components/Logout";
import Friends from './Views/Friends';
import Search from './Views/Search';
import Rooms from './Views/Rooms';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <ProtectedRoute path="/room/:id" component={Room} />
        <ProtectedRoute path="/search" component={Search} />
        <ProtectedRoute path="/friends" component={Friends} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/create-room" component={CreateRoom} />
        <ProtectedRoute path="/join-room" component={JoinRoom} />
        <ProtectedRoute path="/rooms" component={Rooms} />
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
