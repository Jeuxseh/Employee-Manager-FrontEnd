import React, { Component } from 'react';
import employeeService from '../services/employeeServices';

class EmployeeDataForm extends Component {

  state = {
    username: this.props.employee.username,
    dni: this.props.employee.dni,
    phone: this.props.employee.phone,
    address: this.props.employee.address,
    email: this.props.employee.email,
    //week
    schedule: {
      monday: {
        initHour: this.props.employee.schedule.monday.initHour,
        endHour: this.props.employee.schedule.monday.endHour
      },
      tuesday: {
        initHour: this.props.employee.schedule.tuesday.initHour,
        endHour: this.props.employee.schedule.tuesday.endHour
      },
      wednesday: {
        initHour: this.props.employee.schedule.wednesday.initHour,
        endHour: this.props.employee.schedule.wednesday.endHour
      },
      thursday: {
        initHour: this.props.employee.schedule.thursday.initHour,
        endHour: this.props.employee.schedule.thursday.endHour
      },
      friday: {
        initHour: this.props.employee.schedule.friday.initHour,
        endHour: this.props.employee.schedule.friday.endHour
      },
      saturday: {
        initHour: this.props.employee.schedule.saturday.initHour,
        endHour: this.props.employee.schedule.saturday.endHour
      },
      sunday: {
        initHour: this.props.employee.schedule.sunday.initHour,
        endHour: this.props.employee.schedule.sunday.endHour
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { _id } = this.props.employee;
    employeeService.editEmployee(_id, this.state)
      .then((response) => {
        this.props.onSubmit(response.data);
      })
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleChangeTime = (event) => {
    const day = event.target.name.substring(0, event.target.name.indexOf('.'))
    const hour = event.target.name.substring(event.target.name.indexOf('.') + 1, event.target.name.length)
    const value = event.target.value;
    this.setState((previousState)=>{
      const newState = previousState;
      newState.schedule[day][hour]=value;
      return newState;
    })
  }

  render() {
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = this.state.schedule;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Name: <input placeholder="Username..." onChange={this.handleChange} value={this.state.username} name="username" type="text" /></h2>
          <h2>DNI: <input placeholder="Dni..." onChange={this.handleChange} value={this.state.dni} name="dni" type="text" /></h2>
          <h2>Adress: <input placeholder="Address..." onChange={this.handleChange} value={this.state.address} name="address" type="text" /></h2>
          <h2>Phone: <input placeholder="Phone..." onChange={this.handleChange} value={this.state.phone} name="phone" type="number" /></h2>
          <h2>Email: <input placeholder="Email..." onChange={this.handleChange} value={this.state.email} name="email" type="email" /></h2>
          <fieldset>
            <legend>Schedule</legend>
            <input onClick={this.onClick} type="checkbox" name="monday" value="monday" /><label>Monday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="monday.initHour" value={monday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="monday.endHour" value={monday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="tuesday" value="tuesday" /><label>Tuesday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="tuesday.initHour" value={tuesday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="tuesday.endHour" value={tuesday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="wednesday" value="wednesday" /><label>Wednesday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="wednesday.initHour" value={wednesday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="wednesday.endHour" value={wednesday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="thursday" value="thursday" /><label>Thursday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="thursday.initHour" value={thursday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="thursday.endHour" value={thursday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="friday" value="friday" /><label>Friday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="friday.initHour" value={friday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="friday.endHour" value={friday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="saturday" value="saturday" /><label>Saturday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="saturday.initHour" value={saturday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="saturday.endHour" value={saturday.endHour}></input>
            <br />
            <input onClick={this.onClick} type="checkbox" name="sunday" value="sunday" /><label>Sunday</label><br />
            From: <input type="time" onChange={this.handleChangeTime} name="sunday.initHour" value={sunday.initHour}></input>
            to: <input type="time" onChange={this.handleChangeTime} name="sunday.endHour" value={sunday.endHour}></input>
            <br />
          </fieldset>
          <button type="submit">Edit Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeDataForm;