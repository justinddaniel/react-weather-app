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

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request // returning the promise as the payload. Goes to reducer.
  };
}

// redux promise is a middleware; redux-promise sees incoming action, looks at payload property,
// if the payload is a promise, it stops the action entirely and then once the reuest finishes,
// it dispatches action of same time, but the payload of promise resolved into data.
// redux-promise helps us clean up our code by simplifying dealing with promises. 
