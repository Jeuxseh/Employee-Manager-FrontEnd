import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../stylesheets/navbar.css';

class Navbar extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;  
    if (isLogged) {
      return <div className="container-navbar">
        <h3 className="name-navbar">{ username }</h3>
        <p className="name-navbar" onClick={logout}>Logout</p>
      </div>
    } else {
      return <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    }
  
  }
}

export default withAuth(Navbar);