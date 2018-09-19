import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class WeatherList extends Component {
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

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

/* equivalent to function mapStateToProps(state) {
  return { weather: state.weather };
}

*/
