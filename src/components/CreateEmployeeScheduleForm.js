import React, { Component } from 'react';

class CreateEmployeeSchedule extends Component {
  state = {
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {},
  }

  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  onClick = (event) => {
    if (this.isEmpty(this.state[event.target.name])) {
      this.setState({
        [event.target.name]: event.target.value,
      })
    } else {
      this.setState({
        [event.target.name]: {},
      })
    }
  }


  render() {

    return (
      <fieldset>
        <legend>Schedule</legend>
        <input onClick={this.onClick} type="checkbox" name="monday" value="monday" /><label>Mon</label>
        <input onClick={this.onClick} type="checkbox" name="tuesday" value="tuesday" /><label>Tues</label>
        <input onClick={this.onClick} type="checkbox" name="wednesday" value="wednesday" /><label>Wed</label>
        <input onClick={this.onClick} type="checkbox" name="thursday" value="thursday" /><label>Thurs</label>
        <input onClick={this.onClick} type="checkbox" name="friday" value="friday" /><label>Fri</label>
        <input onClick={this.onClick} type="checkbox" name="saturday" value="saturday" /><label>Sat</label>
        <input onClick={this.onClick} type="checkbox" name="sunday" value="sunday" /><label>Sun</label>
        <br /><br />
        From: <input type="time" name="initHour" value="initHour"></input>to: <input type="time" name="endHour" value="endHour"></input>
        <button>+</button>
      </fieldset>
    );
  }
}

export default CreateEmployeeSchedule;