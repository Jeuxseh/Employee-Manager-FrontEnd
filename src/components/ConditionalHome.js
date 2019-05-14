import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import Home from '../pages/Home';
import EmployeeHome from '../pages/EmployeeHome';

// COMPONENTE QUE RENDERIZA LA RUTA DE HOME EN FUNCIÓN DEL TIPO DE USUARIO

class ConditionalHome extends Component {
  render() {
    const { adminId } = this.props.user;
    return (
      <>
      {!adminId ? <Home/>: <EmployeeHome/>}
      </>
    );
  }
}

export default withAuth(ConditionalHome);