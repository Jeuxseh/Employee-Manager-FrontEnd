import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import EditUserForm from '../components/EditUserForm';
import employeeService from '../services/employeeServices'

class User extends Component {

  state = {
    data: {},
    isLoading: true,
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
    const { isLoading } = this.state;
    const { username, lastname, email, phone, address } = this.props.user;

    switch (isLoading) {
      case true:
        return "Is Loading...";
      case false:
        return (
          <div>
            {this.state.editing && <EditUserForm onSubmit={this.handleUpdate} admin={this.state.data} />}
            {!this.state.editing &&
              <div className="container-employee-form">
                <div className="employee-form">
                  <div className="title-row">
                    <h2 className="employee-h2">My profile</h2>
                  </div>
                  <h3 className="input-employee">Username: <span className="span-forms">{username}</span></h3>
                  <h3 className="input-employee">Lastname: <span className="span-forms">{lastname}</span></h3>
                  <h3 className="input-employee">Email: <span className="span-forms">{email}</span></h3>
                  <h3 className="input-employee">Phone: <span className="span-forms">{phone}</span></h3>
                  <h3 className="input-employee">Address: <span className="span-forms">{address}</span></h3>
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