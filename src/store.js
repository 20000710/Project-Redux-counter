import { createStore, combineReducers } from "redux";
import icecream from "./reducer/IceCreamReducer";
import cake from "./reducer/CakeReducer";

const combine = combineReducers({
  IceCream: icecream,
  Cake: cake
});
export default createStore(combine);
