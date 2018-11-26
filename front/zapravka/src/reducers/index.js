import { combineReducers } from "redux";
import stationReducer from "./stationReducer";
import brandReducer from "./brandReducer";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import reviewReducer from "./reviewReducer";
import nearbyReducer from "./nearbyReducer";
import singleStationReducer from "./singleStationReducer";

const rootReducer = combineReducers({
  stations: stationReducer,
  brands: brandReducer,
  registerUserData: registerReducer,
  loginUserData: loginReducer,
  reviews: reviewReducer,
  nearby: nearbyReducer,
  singleStation: singleStationReducer
});

export default rootReducer;
