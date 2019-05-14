import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../stylesheets/navbar.css';

// COMPONENTE QUE RENDERIZA LA NAVBAR EN TODA LA APP

class Navbar extends Component {
  
  render() {

    const { user, logout } = this.props;
    const { username } = user;

    return <div className="container-navbar">
      <h3 className="name-navbar">{username}</h3>
      <p className="name-navbar" onClick={logout}>Logout</p>
    </div>
  }
}

export default withAuth(Navbar);