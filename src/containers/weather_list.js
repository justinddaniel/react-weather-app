import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component { // export default is done down below when exporting the connect of mapStateToProps and WeatherList

  renderWeather(cityData) {

    const name = cityData.city.name; // structure of this determined by api data returned.

    const temps = cityData.list.map(weather => weather.main.temp);


    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width=|180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
    );
  }
}

function mapStateToProps({ weather }) { //pull off weather property from state; e.g. state.weather; const weather = state.weather
  return { weather }; // { weather } === { weather: weather }
}

/* equivalent to function mapStateToProps(state) {
  return { weather: state.weather };
}

*/

export default connect(mapStateToProps)(WeatherList);
