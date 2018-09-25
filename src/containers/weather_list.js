import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component { // export default is done down below when exporting the connect of mapStateToProps and WeatherList

  renderWeather(cityData) {

    const name = cityData.city.name; // structure of this determined by api data returned.

    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);


    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
          <Chart data={pressures} color="blue" />
          <Chart data={humidities} color="black" />
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
