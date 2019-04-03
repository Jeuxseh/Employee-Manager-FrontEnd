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
          <div id="profile">
            <div className="container-employee-form-profile">
              <img src={`${imageUrl}`} alt="imageProfile" className="image-employee" />
              <h2 className='employee-h2'>{username} <span>' s Profile</span></h2>
              <div className="fields">
                <h2>Username: <span>{username}</span></h2>
                <h2>Lastname: <span>{lastname}</span></h2>
                <h2>Email: <span>{email}</span></h2>
                <h2>Phone: <span>{phone}</span></h2>
                <h2>Address: <span>{address}</span></h2>
              </div>
              <div className="buttons-container">
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