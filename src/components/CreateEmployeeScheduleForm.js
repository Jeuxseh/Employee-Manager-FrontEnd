// import React, { Component } from 'react';

// class CreateEmployeeSchedule extends Component {
//   state = {
//     monday: {},
//     tuesday: {},
//     wednesday: {},
//     thursday: {},
//     friday: {},
//     saturday: {},
//     sunday: {},
//   }

//   isEmpty = (obj) => {
//     for (var key in obj) {
//       if (obj.hasOwnProperty(key))
//         return false;
//     }
//     return true;
//   }

//   onClick = (event) => {
//     if (this.isEmpty(this.state[event.target.name])) {
//       this.setState({
//         [event.target.name]: event.target.value,
//       })
//     } else {
//       this.setState({
//         [event.target.name]: {},
//       })
//     }
//   }


//   render() {

//     return (
//       <fieldset>
//         <legend>Schedule</legend>
//         <input onClick={this.onClick} type="checkbox" name="monday" value="monday" /><label>Monday</label><br />
//         From: <input type="time" name="initHourMonday" value="initHour"></input>to: <input type="time" name="endHourMonday" value="endHour"></input>
//         <br />
//         <input onClick={this.onClick} type="checkbox" name="tuesday" value="tuesday" /><label>Tuesday</label><br />
//         From: <input type="time" name="initHourTuesday" value="initHour"></input>to: <input type="time" name="endHourTuesday" value="endHour"></input>
//         <br />
//         <input onClick={this.onClick} type="checkbox" name="wednesday" value="wednesday" /><label>Wednesday</label><br />
//         From: <input type="time" name="initHourWednesday" value="initHour"></input>to: <input type="time" name="endHourWednesday" value="endHour"></input>
//         <br />
//         <input onClick={this.onClick} type="checkbox" name="thursday" value="thursday" /><label>Thursday</label><br />
//         From: <input type="time" name="initHourThursday" value="initHour"></input>to: <input type="time" name="endHourThursday" value="endHour"></input>
//         <br />
//         <input onClick={this.onClick} type="checkbox" name="friday" value="friday" /><label>Friday</label><br />
//         From: <input type="time" name="initHourFriday" value="initHour"></input>to: <input type="time" name="endHourFriday" value="endHour"></input>
//         <br />
//         <input onClick={this.onClick} type="checkbox" name="saturday" value="saturday" /><label>Saturday</label><br />
//         From: <input type="time" name="initHourSaturday" value="initHour"></input>to: <input type="time" name="endHourSaturday" value="endHour"></input>
//         <br />
//         <input onClick={this.onClick} type="checkbox" name="sunday" value="sunday" /><label>Sunday</label><br />
//         From: <input type="time" name="initHourSunday" value="initHour"></input>to: <input type="time" name="endHourSunday" value="endHour"></input>
//         <br />

//       </fieldset>
//     );
//   }
// }

// export default CreateEmployeeSchedule;