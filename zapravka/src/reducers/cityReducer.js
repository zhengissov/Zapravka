import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_CITIES_SUCCESS:
      return action.items;
    case actionTypes.ACTION_GET_CITIES_STARTED:
    case actionTypes.ACTION_GET_CITIES_FAILED:
      return [];
    default:
      return state;
  }
};

const cityReducer = combineReducers({
  items,
});

export default cityReducer;
