import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './providers/AuthProvider';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import User from './pages/User';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Module 3 boilerplate</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
