import { combineReducers } from "redux";
import authReducer from "./Reducers/authReducer";
import cartReducer from "./Reducers/cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
export default rootReducer;
