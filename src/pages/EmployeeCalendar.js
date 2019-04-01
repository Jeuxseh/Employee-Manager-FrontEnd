import React, { Component } from 'react';
import employeeService from '../services/employeeServices';
import HoursTable from '../components/HoursTable'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'react-moment';

class EmployeeCalendar extends Component {

  state = {
    data: {},
    dataRows: [],
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
        })
        this.getCurrentDay();
        this.getSchedule(this.state.data.schedule);
        this.getFormatDay();
        this.getDataRows();
        console.log(this.state.currentInitHour, this.state.currentEndHour)
      })
      .catch(error => console.log(error))
  }

  getDataRows = () => {
    console.log("hoola")
    // const initHour = "05:25";
    // const endHour = "22:12";
    const arrayRows = [];
    const n1 = parseInt(this.state.currentInitHour)
    const n2 = parseInt(this.state.currentEndHour)
    console.log("datarows from: ", n1)
    console.log("datarows to: ", n2)

    for (let i = n1; i <= n2; i++) {

      let stringDay = i + ":00"
      arrayRows.push(stringDay)
    }

    this.setState({
      dataRows: arrayRows,
      isLoading: false
    })
  }

  getHoursTable(){
    console.log("pasar props: ", this.state.currentInitHour, this.state.currentEndHour)

    return <HoursTable initHour={this.state.currentInitHour} endHour={this.state.currentEndHour} dataRows={this.state.dataRows}/>
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
        this.setState({
          currentInitHour: obj[key].initHour,
          currentEndHour: obj[key].endHour,
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
      this.getDataRows();
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
      this.getDataRows();
    } catch (error) {
      console.log(error);
    }
  }

  getConsoleLog(){
    console.log(this.state.currentInitHour, this.state.currentEndHour)
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
            <Moment format="dddd, L">{this.state.formatDate}</Moment>
            <button onClick={this.countUp}><FontAwesomeIcon icon="caret-square-right" /></button>
            <h2>Schedule</h2>
            <p>Hora Inicio: {this.state.currentInitHour}</p>
            <p>Hora Fin: {this.state.currentEndHour}</p>
            {this.getConsoleLog()}
            {this.getHoursTable()}
          </div>
        );
      default:
        break;
    }
  }
}

export default EmployeeCalendar;