import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_POST_LOGIN_SUCCESS:
      return action.items;
    case actionTypes.ACTION_POST_LOGIN_STARTED:
    case actionTypes.ACTION_POST_LOGIN_FAILED:
      return [];
    default:
      return state;
  }
};

const loginReducer = combineReducers({
  items,
});

export default loginReducer;
