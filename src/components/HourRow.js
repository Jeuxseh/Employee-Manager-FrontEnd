import React, { Component } from 'react';
import '../stylesheets/employeeCalendar.css'

class HourRow extends Component {
  render() {

    const scheduleContainer = {
      height: `${this.props.offsetHour}%`,
    }

    return (
      <li className="row-container">
          <div className="schedule-hour">{this.props.item}</div>
          <div className="schedule-container" style={scheduleContainer}></div>
      </li>

    );
  }
}

export default HourRow;