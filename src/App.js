import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
// import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './providers/AuthProvider';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import User from './pages/User';
import NewEmployee from './pages/NewEmployee';
import EmployeeCalendar from './pages/EmployeeCalendar';



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            {/* <PrivateRoute path="/private" component={Private} /> */}
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute exact path="/calendar" component={Calendar} />
            <PrivateRoute path="/calendar/:id" component={EmployeeCalendar} />
            <PrivateRoute path="/employee/new" component={NewEmployee}/>
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
