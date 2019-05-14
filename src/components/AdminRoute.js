import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

// RUTAS A LAS QUE SOLO PUEDE ACCEDER UN ADMINISTRADOR

const AdminRoute = ({ component: Component,user, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogged && !user.adminId) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default withAuth(AdminRoute);