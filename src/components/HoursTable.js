import React, { Component } from 'react';
import HourRow from './HourRow'
import { exists } from 'fs';

class HoursTable extends Component {

  renderRows = () => {
    return this.props.dataRows.map((item, index) => {
      if (index === 0) {
        console.log('heightInit', this.props.heightInit)
        return <HourRow
          key={`id-${index}`}
          item={item}
          offsetHour={this.props.heightInit}
        />
      } else if ((index === this.props.dataRows.length - 1)) {
        console.log('heightEnd', this.props.heightEnd)
        if (this.props.heightEnd === 0) {
          console.log('fuera')
        } else {
          return <HourRow
            key={`id-${index}`}
            item={item}
            offsetHour={this.props.heightEnd}
          />
        }
      } else {
        console.log('heightHour', this.props.heightHour)
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