import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component { // export default is done down below when exporting the connect of mapStateToProps and WeatherList
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
