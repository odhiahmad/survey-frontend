import { combineReducers } from "redux";
import {
  setToken,
  login,
  getSessionStorage

} from "../reducers/auth";
import {
  getWilayah,
  createWilayah,
  updateWilayah

} from "../reducers/wilayah";

const rootReducer = combineReducers({
  setToken,
  login,
  getSessionStorage,
  getWilayah,
  createWilayah,
  updateWilayah
});

export default rootReducer;
