import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import EditUserForm from '../components/EditUserForm';
import currentUserService from '../services/currentUserServices'
import '../stylesheets/employee-data.css';

class User extends Component {

  state = {
    data: {},
    editing: false,
    isLoading: true,

  }

  handleClick = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleUpdate = (user) => {
    this.setState({
      editing: !this.state.editing,
      data: user,
    })
  }

  componentDidMount() {
    currentUserService.getCurrentUser()
      .then((data) => {
        this.setState({
          data: data[0],
          isLoading: false,
        })
      })
  }

  render() {
    const { isLoading } = this.state;
    const { username, email, phone, address, company } = this.state.data;

    switch (isLoading) {
      case true:
        return "Is Loading...";
      case false:
        return (
          <div>
            {this.state.editing ? <EditUserForm onSubmit={this.handleUpdate} admin={this.state.data} /> :
              <div className="container-employee-form">
                <div className="employee-form">
                  <div className="title-row">
                    <h2 className="employee-h2">My profile</h2>
                  </div>
                  <h3 className="input-user">Email: <span className="span-forms">{email}</span></h3>
                  <h3 className="input-user">Company: <span className="span-forms">{company}</span></h3>
                  <h3 className="input-user">Phone: <span className="span-forms">{phone}</span></h3>
                  <h3 className="input-user">Address:<span className="span-forms">{address}</span></h3>
                  <button className="edit-button" onClick={this.handleClick}>Edit</button>
                </div>
              </div>
            }
          </div>
        );
      default:
        break;
    }
  }
}


export default withAuth(User);