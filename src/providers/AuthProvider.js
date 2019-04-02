import React, { Component } from 'react'
import authService from '../lib/auth-service';

export const AuthContext = React.createContext(
  // authStore // default value
);

const { Provider, Consumer } = AuthContext;

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {(authStore) => {
            return <Comp
              status={authStore.status}
              isLogged={authStore.isLogged}
              user={authStore.user}
              setUser={authStore.setUser}
              logout={authStore.logout}
              login={authStore.login}
              signup={authStore.signup}
              {...this.props} />
          }}
        </Consumer>
      )
    }
  }
}

export default class AuthProvider extends Component {
  state = {
    isLogged: false,
    user: {},
    status: 'loading'
  }

  setUser = (user) => {
    this.setState({
      isLogged: true,
      user,
    })
  }

  logoutUser = () => {
    return authService.logout()
      .then(() => {
        this.setState({
          isLogged: false,
          user: {},
        });
      })
      .catch(error => console.log(error))
  }

  loginUser = (body) => {
    return authService.login(body)
      .then((user) => {
        this.setUser(user);
      })
      .catch(error => {
        if (error.response.data.error) {
          return error.response.data;
        } else {
          console.log(error);
        }
      })
  }

  signupUser = (body) => {
    return authService.signup(body)
      .then((user) => {
        this.setUser(user);
      })
      .catch(error => {
        if (error.response.data.error) {
          return error.response.data;
        } else {
          console.log(error)
        }

      })
  }

  componentDidMount() {
    authService.me()
      .then((user) => {
        this.setState({
          isLogged: true,
          user,
          status: 'loaded'
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          isLogged: false,
          user: {},
          status: 'hasError'
        });
      })
  }

  render() {
    const { isLogged, user, status } = this.state;
    const { children } = this.props;
    switch (status) {
      case 'loading':
        return <div>Loading</div>
      default:
        return (
          <Provider value={
            {
              isLogged,
              setUser: this.setUser,
              user,
              status: this.state.status,
              logout: this.logoutUser,
              login: this.loginUser,
              signup: this.signupUser,
            }}>
            {children}
          </Provider>
        );
    }
  }
}
