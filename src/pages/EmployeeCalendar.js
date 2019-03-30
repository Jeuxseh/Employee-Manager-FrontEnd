import React, { Component } from 'react';
import employeeService from '../services/employeeServices';
import { Link } from 'react-router-dom';


class EmployeeCalendar extends Component {

  state = {
    data: {}
    
  }

  componentDidMount() {
    this.getOneEmployee();
  }

  getOneEmployee = () => {
    const { id } = this.props.match.params;
    employeeService.getEmployee(id)
      .then(data => {
        this.setState({
          data
        })
      })
      .catch(error => console.log(error))
  }

  getSchedule = (obj) => {
    
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());

    var day = currentDate.toString().substr(0,3).toLocaleLowerCase();
    for (var key in obj) { 
      if (key.toString().substr(0,3) === day){
        console.log(obj[key])
        const initHour = obj[key].initHour;
        const endHour = obj[key].endHour;
        console.log(initHour)
        console.log(endHour)
      } 
    }
  }


  render() {
    const { _id, username, schedule } = this.state.data;

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());

    var day = currentDate.toString().substr(0,3).toLocaleLowerCase();
    var date = currentDate.toISOString().substr(0, 10);

  
    return (
      <div>
        {this.getSchedule(schedule)}
        <Link to={`/employee/${_id}`} >Profile</Link>
        <h1>Calendar {username}</h1>
        <input onchange={this.dateChange}id="dateRequired" type="date" name="dateRequired" defaultValue={date} />

        <h2>Schedule</h2>        
      </div>
    );
  }
}

export default EmployeeCalendar;