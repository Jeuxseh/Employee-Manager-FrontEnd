import React, { Component } from 'react';
import employeeService from '../services/employeeServices';
import HoursTable from '../components/HoursTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'react-moment';
import '../stylesheets/employeeCalendar.css'
import {withAuth} from '../providers/AuthProvider';


class EmployeeHome extends Component {
  state = {
    data: {},
    dataRows: [],
    currentInitHour: '',
    currentEndHour: '',
    counterDay: 0,
    currentDay: '',
    formatDate: '',
    isLoading: true,
    heightHour: 100,
    heightInit: 100,
    heightEnd: 100,
  }

  componentDidMount() {
    this.getOneEmployee()
  }

  getOneEmployee = () => {
    const { _id } = this.props.user;
    employeeService.getEmployee(_id)
      .then(data => {
        this.setState({
          data,
        })
        this.getCurrentDay();
        this.getSchedule(this.state.data.schedule);
        this.getFormatDay();
        this.getDataRows();
      })
      .catch(error => console.log(error))
  }

  //traido de HourTable.js
  getDataRows = () => {
    // const initHour = "05:25";
    // const endHour = "22:12";
    const arrayRows = [];
    const n1 = parseInt(this.state.currentInitHour)
    const n2 = parseInt(this.state.currentEndHour)

    for (let i = n1; i <= n2; i++) {

      let stringDay = i + ":00"
      arrayRows.push(stringDay)
    }
    this.getHeigth();

    this.setState({
      dataRows: arrayRows,
      isLoading: false
    })
  }
  //traido de HourTable.js
  getHeigth = () => {
    const min1 = this.state.currentInitHour.split(':');
    const minInit = min1[1];
    const min2 = this.state.currentEndHour.split(':');
    const minEnd = min2[1];

    let heightStart = 100;
    let heightFinish = 100;

    if (minInit !== "00") {

      heightStart = 100 - (minInit / 60 * 100);

    }
    if (minEnd !== "00") {
      heightFinish = (minEnd / 60) * 100;
    } else if (minEnd === "00") {
      heightFinish = 0
    }


    this.setState({
      heightInit: heightStart,
      heightEnd: heightFinish,
    })
  }

  getHoursTable() {
    return <HoursTable
      initHour={this.state.currentInitHour}
      endHour={this.state.currentEndHour}
      dataRows={this.state.dataRows}
      heightHour={this.state.heightHour} 
      heightInit={this.state.heightInit}
      heightEnd={this.state.heightEnd}
    />
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

  render() {
    const { username } = this.state.data;
    const { isLoading } = this.state;

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + this.state.counterDay);

    switch (isLoading) {
      case true:
        return "Loading....";
      case false:
        return (
          <div id="employee-calendar">
            <div className="title-row">
              <h2 className='employee-h2'>{username}'s <br/> Calendar</h2>
            </div>
            <div className="day-selector">
              <button onClick={this.countDown}><FontAwesomeIcon icon="caret-square-left" /></button>
              <Moment className="date" format="dddd, DD/MM/YYYY">{this.state.formatDate}</Moment>
              <button onClick={this.countUp}><FontAwesomeIcon icon="caret-square-right" /></button>
            </div>
            <p className="from-to"> from: <span>{this.state.currentInitHour}</span> to: <span>{this.state.currentEndHour}</span> </p>

            <div className="calendar">
              {this.getHoursTable()}
            </div>
          </div>
        );
      default:
        break;
    }
  }
}

export default withAuth(EmployeeHome);