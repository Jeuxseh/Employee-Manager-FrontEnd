import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// COMPONENTE QUE CONTENDRÁ LOS LINKS (ICONOS) A LAS DISTINTAS RUTAS DE LA APP
//  DESDE LA VISTA DEL EMPLOYEE


class FooterEmployee extends Component {
  render() {
    return (
      <div className="footer-employee">
        {/* LINK AL CALENDARIO PROPIO (HOME) */}
        <Link to='/employee/:id' className="navbar-icon"><FontAwesomeIcon icon="home" /></Link>
        {/* LINK A LA VISTA DEL PROPIO PERFIL */}
        <Link to='/user' className="navbar-icon"><FontAwesomeIcon icon="user-alt" /></Link>
      </div>
    );
  }
}

export default FooterEmployee;