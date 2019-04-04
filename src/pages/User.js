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
    const { email, phone, address, company, imageUrl } = this.state.data;

    switch (isLoading) {
      case true:
        return "Is Loading...";
      case false:
        return (
          <div id="profile">
            {this.state.editing ? <EditUserForm onSubmit={this.handleUpdate} admin={this.state.data} /> :
              <div className="container-employee-form-profile">


                <img className="image-employee" src={`${imageUrl}`} alt="profileImage" />
                <h2 className="employee-h2">My profile</h2>

                <div className="fields">
                  <h2>Email: <span>{email}</span></h2>
                  <h2>Company: <span>{company}</span></h2>
                  <h2>Phone: <span>{phone}</span></h2>
                  <h2>Address:<span>{address}</span></h2>
                </div>
                <div className="div-button-profile">
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