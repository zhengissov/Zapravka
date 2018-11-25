import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_POST_REGISTER_SUCCESS:
      return action.items;
    case actionTypes.ACTION_POST_REGISTER_STARTED:
    case actionTypes.ACTION_POST_REGISTER_FAILED:
      return [];
    default:
      return state;
  }
};

const registerReducer = combineReducers({
  items,
});

export default registerReducer;
