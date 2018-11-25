import { combineReducers } from "redux";
import stationReducer from "./stationReducer";
import brandReducer from "./brandReducer";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
  stations: stationReducer,
  brands: brandReducer,
  registerUserData: registerReducer,
  loginUserData: loginReducer,
  reviews: reviewReducer
});

export default rootReducer;
