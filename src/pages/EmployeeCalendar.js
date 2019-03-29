import React, { Component } from 'react';
import employeeService from '../services/employeeServices';
import {Link} from 'react-router-dom';


class EmployeeCalendar extends Component {

  state = {
    data:{}
  }

  componentDidMount() {
    this.getOneEmployee();
  }

  getOneEmployee = () => {
    const {id} = this.props.match.params;
    employeeService.getEmployee(id)
      .then(data=> {
        this.setState({
          data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const {_id, username} = this.state.data;
    return (
      
      <div>
        <h1>Calendar {username}</h1>
        <Link to={`/employee/${_id}`} >Profile</Link>
        
      </div>
    );
  }
}

export default EmployeeCalendar;