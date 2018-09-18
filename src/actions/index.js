import axios from 'axios';

const API_KEY = 'insert key here';
const ROOT_URL = 'insert root url to api you will call'; // 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

// middleware: function that lets action pass, manipulates it, logs it, or stops it, before it is given to reducers.
// middleware can be thought of as gatekeepers.
// all actions created flow through middleware.

export const FETCH_WEATHER = 'FETCH_WEATHER'; // use variable to keep types consistent between files that can be referenced later.

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //will return a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
