import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import employeeService from '../services/employeeServices';
import PhotoUpload from '../components/PhotoUpload';
import currentUserService from '../services/currentUserServices';

class User extends Component {

  state = {
    imageUrl: '',
    isLoading: true,
    editing: false
  }

  handleClick = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { _id } = this.props.user;
    this.setState({
      editing: !this.state.editing,
    })
    currentUserService.editCurrentUser(_id, this.state)
      .then((response) => {
        this.props.setUser(response.data);
      })
      .catch(error => console.log(error))
  }

  handleUpload = (url) => {
    this.setState({
      imageUrl: url,
    })
  }
  componentDidMount() {
    employeeService.getEmployee(this.props.user._id)
      .then((data) => {
        this.setState({
          data: data[0],
          isLoading: false,
        })
      })
  }

  render() {
    const { isLoading, editing } = this.state;
    const { username, lastname, email, phone, address, imageUrl } = this.props.user;

    switch (isLoading) {
      case true:
        return "Is Loading...";
      case false:
        return (
          <div>

            <div className="container-employee-form">
              <div className="employee-form">
                <div className="title-row">
                  <h2 className="employee-h2">My profile</h2>
                  <img src={`${imageUrl}`} alt="imageProfile" />
                </div>
                <h3 className="input-employee">Username: <span className="span-forms">{username}</span></h3>
                <h3 className="input-employee">Lastname: <span className="span-forms">{lastname}</span></h3>
                <h3 className="input-employee">Email: <span className="span-forms">{email}</span></h3>
                <h3 className="input-employee">Phone: <span className="span-forms">{phone}</span></h3>
                <h3 className="input-employee">Address: <span className="span-forms">{address}</span></h3>
                {editing ?
                  <>
                    <PhotoUpload onUploading={this.handleUpload} />
                    <button className="confirm-button" onClick={this.handleSubmit}>Confirm</button>
                  </> : <button className="edit-button" onClick={this.handleClick}>Edit</button>
                }
              </div>
            </div>

          </div>
        );
      default:
        break;
    }

  }
}

export default withAuth(User);