import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';


const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_SINGLE_STATION_SUCCESS:
      return action.items;
    case actionTypes.ACTION_GET_SINGLE_STATION_STARTED:
    case actionTypes.ACTION_GET_SINGLE_STATION_FAILED:
      return [];
    default:
      return state;
  }
};

const singleStationReducer = combineReducers({
  items,
});

export default singleStationReducer;
