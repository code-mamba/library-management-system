import { combineReducers } from "redux";
import booksReducers from "./reducer";
const rootReducer = combineReducers({
  data: booksReducers,
});
export default rootReducer;
