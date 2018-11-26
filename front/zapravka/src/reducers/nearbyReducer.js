import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_POST_NEARBY_SUCCESS:
      return action.items;
    case actionTypes.ACTION_POST_NEARBY_STARTED:
    case actionTypes.ACTION_POST_NEARBY_FAILED:
      return [];
    default:
      return state;
  }
};

const nearbyReducer = combineReducers({
  items,
});

export default nearbyReducer;
