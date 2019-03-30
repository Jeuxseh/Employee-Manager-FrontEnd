import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to='/calendar' ><FontAwesomeIcon icon="calendar-alt" /></Link>
        <Link to='/' ><FontAwesomeIcon icon="home" /></Link>
        <Link to='/user' ><FontAwesomeIcon icon="user-alt" /></Link>
      </div>
    );
  }
}

export default Footer;