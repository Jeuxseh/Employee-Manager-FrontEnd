import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import '../stylesheets/app.css';

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
      <div class="container-login">
        <form onSubmit={this.handleFormSubmit} className="login-form">
          <label>Username:</label>
          <input class="placeholder-white" type="text" name="username" value={username} onChange={this.handleChange} />
          <label>Password:</label>
          <input class="placeholder-white" type="password" name="password" value={password} onChange={this.handleChange} />
          <input class="submitButton" type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default withAuth(Login);
