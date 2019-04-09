import React, { Component } from 'react';
import HourRow from './HourRow';

// COMPONENTE QUE HACE EL COMPUTO DE LA GRÁFICA

class HoursTable extends Component {


  // ESTA FUNCIÓN MIRA LA POSICIÓN EN LA QUE SE ENCUENTRA EN EL ARRAY DE HORAS

  renderRows = () => {
    return this.props.dataRows.map((item, index) => {
      if (index === 0) {
        return <HourRow
          key={`id-${index}`}
          item={item}
          offsetHour={this.props.heightInit}
        />
      } else if ((index === this.props.dataRows.length - 1)) {
        if (this.props.heightEnd !== 0) {
          return <HourRow
            key={`id-${index}`}
            item={item}
            offsetHour={this.props.heightEnd}
          />
        }

      } else {
        return <HourRow
          key={`id-${index}`}
          item={item}
          offsetHour={this.props.heightHour}
        />
      }
    })
  }

  render() {
    return (
      <div className="center-elements background-color">
        <ul id="employee-schedule" >
          {this.renderRows()}
        </ul>
      </div>
    );
  }
}

export default HoursTable;