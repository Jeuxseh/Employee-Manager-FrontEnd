import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to="/employee/new" className="navbar-icon"><FontAwesomeIcon icon="user-plus"/></Link>
        <Link to='/' className="navbar-icon"><FontAwesomeIcon icon="home" /></Link>
        <Link to='/user' className="navbar-icon"><FontAwesomeIcon icon="user-alt" /></Link>
      </div>
    );
  }
}

export default Footer;