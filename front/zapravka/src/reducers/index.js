import { combineReducers } from 'redux';
import cityReducer from './cityReducer'
import stationReducer from './stationReducer'
import brandReducer from './brandReducer'

const rootReducer = combineReducers({
  cities : cityReducer, stations: stationReducer, brands: brandReducer
})

export default rootReducer;