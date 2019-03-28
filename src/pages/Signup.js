import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    email: "",
    address: "",
    company: "",
    phone: "",
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
      .then(() => {
        this.setState({
          username: "",
          password: "",
          email: "",
          address: "",
          company: "",
          phone: "",
        });
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, company, email, phone, address } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <label>Company:</label>
          <input type="text" name="company" value={company} onChange={this.handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
          <label>Phone:</label>
          <input type="number" name="phone" value={phone} onChange={this.handleChange} />
          <label>Address:</label>
          <input type="text" name="address" value={address} onChange={this.handleChange} />
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default withAuth(Signup);