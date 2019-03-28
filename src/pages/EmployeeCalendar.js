import React, { Component } from 'react';
import Footer from '../components/Footer';
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
    employeeService.getOne(id)
      .then(data=> {
        this.setState({
          data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const {_id} = this.state.data;
    return (
      
      <div>
        <h1>Calendar {this.state.data.username}</h1>
        <Link to={`/employee/${_id}`} >Profile</Link>
        <Footer/>
      </div>
    );
  }
}

export default EmployeeCalendar;