import React, { Component } from 'react';
import employeeService from '../services/employeeServices';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class EmployeeCalendar extends Component {

  state = {
    data: {},
    currentInitHour: '',
    currentEndHour: '',
    counterDay: 0,
    currentDay: '',
    formatDate: '',
    isLoading: true
  }

  componentDidMount() {
    this.getOneEmployee()
  }

  getOneEmployee = () => {
    const { id } = this.props.match.params;
    employeeService.getEmployee(id)
      .then(data => {
        this.setState({
          data,
          isLoading: false
        })
        this.getCurrentDay();
        this.getSchedule(this.state.data.schedule);
        this.getFormatDay();
      })
      .catch(error => console.log(error))
  }

  getCurrentDay = () => {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + this.state.counterDay);  // <- Para modificar la fecha
    this.setState({
      currentDay: currentDate
    })
  }

  getSchedule = (obj) => {
    var day = this.state.currentDay.toString().substr(0, 3).toLocaleLowerCase();
    for (var key in obj) {
      if (key.toString().substr(0, 3) === day) {
        // console.log(obj[key])
        this.setState({
          currentInitHour: obj[key].initHour,
          currentEndHour: obj[key].endHour
        })
      }
    }
  }

  getFormatDay = () => {
    var date = this.state.currentDay.toISOString().substr(0, 10);
    this.setState({
      formatDate: date
    })
  }

  countDown = async () => {
    await this.setState({
      counterDay: this.state.counterDay - 1,
    })
    try {
      this.getCurrentDay()
      this.getFormatDay()
      this.getSchedule(this.state.data.schedule)
    } catch (error) {
      console.log(error);
    }
  }

  countUp = async () => {
    await this.setState({
      counterDay: this.state.counterDay + 1
    });
    try {
      this.getCurrentDay()
      this.getFormatDay()
      this.getSchedule(this.state.data.schedule)
    } catch (error) {
      console.log(error);
    }
  }

  dateChange = (event) => {

    const date = new Date();
    const day = date.getDate();
    console.log(date)
  }


  render() {
    const { _id, username } = this.state.data;
    const { isLoading } = this.state;

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + this.state.counterDay);
    var date = currentDate.toISOString().substr(0, 10);

    switch (isLoading) {
      case true:
        return "Loading....";
      case false:
        return (
          <div>
            <Link to={`/employee/${_id}`} >Profile</Link>
            <h1>Calendar {username}</h1>
            <button onClick={this.countDown}><FontAwesomeIcon icon="caret-square-left" /></button>
            {/* <input onChange={this.dateChange} id="dateRequired" type="date" name="dateRequired" value={this.state.formatDate}/> */}
            <p>{this.state.formatDate}</p>

            <button onClick={this.countUp}><FontAwesomeIcon icon="caret-square-right" /></button>
            <h2>Schedule</h2>
            <p>Hora Inicio: {this.state.currentInitHour}</p>
            <p>Hora Fin: {this.state.currentEndHour}</p>
          </div>
        );
      default:
        break;
    }
  }
}

export default EmployeeCalendar;