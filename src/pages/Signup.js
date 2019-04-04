import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../stylesheets/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Signup extends Component {

  state = {
    username: "",
    password: "",
    email: "",
    address: "",
    company: "",
    phone: "",
    error: null,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const address = this.state.address;
    const company = this.state.company;
    const phone = this.state.phone;

    this.props.signup({ username, password, email, address, company, phone })
      .then((data) => {
        if(data.error){
          this.setState({
            error: data.code,
          })
        } else {
          this.setState({
            username: "",
            password: "",
            email: "",
            address: "",
            company: "",
            phone: "",
          });
        }
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, company, email } = this.state;
    return (
      <div className="container-form">
        <h2 className="login-h2">Employee Manager</h2>
        <form onSubmit={this.handleFormSubmit} className="login-form">
          <label>Username:</label>
          <input className="input-placeholder" type="text" name="username" value={username} onChange={this.handleChange} />
          <label>Password:</label>
          <input className="input-placeholder" type="password" name="password" value={password} onChange={this.handleChange} />
          <label>Company:</label>
          <input className="input-placeholder" type="text" name="company" value={company} onChange={this.handleChange} />
          <label>Email:</label>
          <input className="input-placeholder" type="email" name="email" value={email} onChange={this.handleChange} />
          
          {this.state.error && <p className="p-error">{this.state.error}</p>}

          <input class="submitButton" type="submit" value="Signup" />
        </form>
        <p>Already have account?
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default withAuth(Signup);