import React, { Component } from 'react';
import '../stylesheets/employeeCalendar.css';

// COMPONENTE QUE GENERA LA ROW DE LA GRÁFICA COMPUESTA POR DOS COLUMNAS:
// LA PRIMERA TE ESCRIBE LA HORA Y LA SEGUNDA TE PINTA LA FRANJA QUE ESTA OCUPA

class HourRow extends Component {
  render() {

    // CONSTANTE DE LA ALTURA QUE METERMOS EN EL ESTILO
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