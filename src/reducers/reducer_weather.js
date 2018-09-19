import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { // weather data will be stored in array, and thus we start state as an empty array.
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];  // code to avoid: state.push(action.payload.data) because it mutates state
  }
  console.log('Action reeived', action);
  return state;
}
