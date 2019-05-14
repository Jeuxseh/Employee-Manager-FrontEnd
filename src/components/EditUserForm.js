import React, { Component } from 'react';
import currentUserService from '../services/currentUserServices';
import { withAuth } from '../providers/AuthProvider';
import PhotoUpload from '../components/PhotoUpload';

class EditUserForm extends Component {

  state = {
    error: null,
    username: this.props.admin.username,
    dni: this.props.admin.dni,
    phone: this.props.admin.phone,
    address: this.props.admin.address,
    email: this.props.admin.email,
    company: this.props.admin.company,
    imageUrl: this.props.admin.imageUrl,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { _id } = this.props.admin;
    currentUserService.editCurrentUser(_id, this.state)
      .then((response) => {
        this.props.onSubmit(response.data);
        this.props.setUser(response.data);

      })
      .catch(error => {
        if (error.response.data.error) {
          this.setState({
            error: error.response.data.code
          })
        } else {
          console.log(error)
        }
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpload = (url) => {
    this.setState({
      imageUrl: url,
    })
  }


  render() {
    return (
      <div className="container-employee-form">
        <form className="admin-form" onSubmit={this.handleSubmit}>
        <img src={`${this.state.imageUrl}`} alt="imageProfile" className="image-employee" />

            <h2 className="employee-h2">My profile</h2>
          {/* </div> */}
          <h3 className="input-user">Email: <input className="box-form" placeholder="email..." onChange={this.handleChange} value={this.state.email} name="email" type="email" /></h3>
          <h3 className="input-user">Company: <input className="box-form" placeholder="company..." onChange={this.handleChange} value={this.state.company} name="company" type="text" /></h3>
          <h3 className="input-user">Phone: <input className="box-form" placeholder="phone..." onChange={this.handleChange} value={this.state.phone} name="phone" type="number" /></h3>
          <h3 className="input-user">Address: <input className="box-form" placeholder="address..." onChange={this.handleChange} value={this.state.address} name="address" type="text" /></h3>
          <div>
            {this.state.error && <p className="p-error">{this.state.error}</p>}
          </div>

          <div className="edit-button-upload">

          <PhotoUpload onUploading={this.handleUpload} />
          </div>
          
          <button className="edit-button" type="submit">Confirm</button>
        </form>
      </div>
    );
  }
}

export default withAuth(EditUserForm);