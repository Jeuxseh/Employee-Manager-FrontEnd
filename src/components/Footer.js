import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <Link to='/' >Home</Link>
        <Link to='/calendar' >Calendar</Link>
        <Link to='/user' >User</Link>
      </div>
    );
  }
}

export default Footer;