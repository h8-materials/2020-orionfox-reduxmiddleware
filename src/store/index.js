import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'

import userReducer from "./reducers/userReducer";

const reducers = combineReducers({ userReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
