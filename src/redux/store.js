import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [reduxThunk];

middleware.push(logger);
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
