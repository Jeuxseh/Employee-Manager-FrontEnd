import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import '../stylesheets/app.css';
import '../stylesheets/login.css';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }
  // todo validaciones del formulario

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
      .then(() => { })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container-form">
      <h2 className='login-h2'>Employee Manager</h2>
        <form onSubmit={this.handleFormSubmit} className="login-form">
          <label>Username</label>
          <input className="placeholder" type="text" name="username" value={username} onChange={this.handleChange} />
          <label>Password</label>
          <input className="placeholder" type="password" name="password" value={password} onChange={this.handleChange} />
          <input class="submitButton" type="submit" value="Login" />
        </form>
        <p>Don't have account?
          <Link to={"/signup"}> Sign up</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Login);
