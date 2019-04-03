import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class FooterEmployee extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to='/employee/:id' className="navbar-icon"><FontAwesomeIcon icon="home" /></Link>
        <Link to='/user' className="navbar-icon"><FontAwesomeIcon icon="user-alt" /></Link>
      </div>
    );
  }
}

export default FooterEmployee;