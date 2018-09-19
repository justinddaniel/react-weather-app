import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  state: (staet = {}) => state
});

export default rootReducer;
