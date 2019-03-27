import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to='/calendar' ><img src="../images/001-clock.png" alt="schedule"/></Link>
        <Link to='/' ><img src="../images/002-home.png" alt="home"/></Link>
        <Link to='/user' ><img src="../images/003-user.png" alt="user"/></Link>
      </div>
    );
  }
}

export default Footer;