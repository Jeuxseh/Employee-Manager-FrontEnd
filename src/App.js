import React, { Component } from 'react';
import './stylesheets/app.css';
import { Switch, Route } from 'react-router-dom'
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
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareLeft, faCaretSquareRight, faHome, faCalendarAlt, faUserAlt, faUser,faClipboardList } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretSquareLeft, faCaretSquareRight, faHome, faCalendarAlt, faUserAlt, faUser,faClipboardList)

const Layout = () => {
  return <div>
    <Navbar />
    <Switch>
      <PrivateRoute exact path={`/`} component={Home} />
      <PrivateRoute exact path={`/user`} component={User} />
      <PrivateRoute exact path={`/calendar`} component={Calendar} />
      <PrivateRoute exact path={`/calendar/:id`} component={EmployeeCalendar} />
      <PrivateRoute exact path={`/employee/new`} component={NewEmployee} />
      <PrivateRoute exact path={`/employee/:id`} component={EmployeeProfile} />
    </Switch>
    <Footer />
  </div>
}

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <Route path="/" component={Layout} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
