import { combineReducers } from 'redux';
import stationReducer from './stationReducer'
import brandReducer from './brandReducer'

const rootReducer = combineReducers({
  stations: stationReducer, brands: brandReducer
})

export default rootReducer;