import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

// RUTAS A LA QUE SOLO PUEDEN ACCEDER LOS USUARIOS NO LOGEADOS

const AnonRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLogged) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default withAuth(AnonRoute);