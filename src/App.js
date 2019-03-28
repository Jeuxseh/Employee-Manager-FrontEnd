import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './providers/AuthProvider';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import User from './pages/User';
import NewEmployee from './pages/NewEmployee';
import EmployeeCalendar from './pages/EmployeeCalendar';
import EmployeeProfile from './components/EmployeeProfile';



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute exact path="/calendar" component={Calendar} />
            <PrivateRoute path="/calendar/:id" component={EmployeeCalendar} />
            <PrivateRoute path="/employee/new" component={NewEmployee}/>
            <PrivateRoute path="/employee/:id" component={EmployeeProfile}/>
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
