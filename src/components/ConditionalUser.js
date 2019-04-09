import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import User from '../pages/User';
import EmployeeUser from '../pages/EmployeeUser';

// COMPONENTE QUE RENDERIZA EL LA VISTA DEL PROFILE EN FUNCIÓN DEL TIPO DE USUARIO

class ConditionalUser extends Component {
  render() {
    const { adminId } = this.props.user;
    return (
      <>
      {!adminId ? <User/>: <EmployeeUser/>}
      </>
    );
  }
}

export default withAuth(ConditionalUser);