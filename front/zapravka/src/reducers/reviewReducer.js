import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_REVIEWS_SUCCESS:
      return action.items;
    case actionTypes.ACTION_GET_REVIEWS_STARTED:
    case actionTypes.ACTION_GET_REVIEWS_FAILED:
      return [];
    default:
      return state;
  }
};

const reviewReducer = combineReducers({
  items,
});

export default reviewReducer;
