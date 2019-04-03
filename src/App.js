import React, { Component } from 'react';
import './stylesheets/app.css';
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AdminRoute from './components/AdminRoute';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './providers/AuthProvider';
import ConditionalHome from './components/ConditionalHome';
import Calendar from './pages/Calendar';
import User from './pages/User';
import NewEmployee from './pages/NewEmployee';
import EmployeeCalendar from './pages/EmployeeCalendar';
import EmployeeProfile from './components/EmployeeProfile';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareLeft, faCaretSquareRight, faHome, faCalendarAlt, faUserAlt, faUser, faClipboardList, faPhone, faUserPlus, faBusinessTime, faUserClock} from '@fortawesome/free-solid-svg-icons'

library.add(faCaretSquareLeft, faCaretSquareRight, faHome, faCalendarAlt, faUserAlt, faUser,faClipboardList, faPhone, faUserPlus, faBusinessTime, faUserClock)

const Layout = () => {
  return <div>
    <Navbar />
    <Switch>
      <PrivateRoute exact path={`/`} component={ConditionalHome} />
      <PrivateRoute exact path={`/user`} component={User} />
      <AdminRoute exact path={`/calendar`} component={Calendar} />
      <AdminRoute exact path={`/calendar/:id`} component={EmployeeCalendar} />
      <AdminRoute exact path={`/employee/new`} component={NewEmployee} />
      <AdminRoute exact path={`/employee/:id`} component={EmployeeProfile} />
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
