import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// COMPONENTE QUE CONTENDRÁ LOS LINKS (ICONOS) A LAS DISTINTAS RUTAS DE LA APP 
// DESDE LA VISTA DEL ADMIN

class Footer extends Component {
  render() {
    return (
      <div className="navbar-container">
        {/* LINK A CREAR UN NUEVO USUARIO */}
        <Link to="/employee/new" className="navbar-icon"><FontAwesomeIcon icon="user-plus"/></Link>
        {/* LINK A LA PANTALLA DE HOME */}
        <Link to='/' className="navbar-icon"><FontAwesomeIcon icon="home" /></Link>
        {/* LINK A LA VISTA DEL PROPIO PERFIL */}
        <Link to='/user' className="navbar-icon"><FontAwesomeIcon icon="user-alt" /></Link>
      </div>
    );
  }
}

export default Footer;