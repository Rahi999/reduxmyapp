import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AppReducer } from "./reducer";
import {reducer as AuthReducer } from "../AuthReducer/reducer"

const rootReducer = combineReducers({
    AppReducer,
    AuthReducer
  });
  export const store = legacy_createStore(
    rootReducer,
   // applyMiddleware(logger1, logger2)
  );