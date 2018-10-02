import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_STATIONS_SUCCESS:
      return action.items;
    case actionTypes.ACTION_GET_STATIONS_STARTED:
    case actionTypes.ACTION_GET_STATIONS_FAILED:
      return [];
    default:
      return state;
  }
};

const stationReducer = combineReducers({
  items,
});

export default stationReducer;
