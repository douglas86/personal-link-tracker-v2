import { combineReducers } from "./combineReducers";
import {
  dataReducers,
  formReducers,
  alertsReducers,
} from "../../Context/reducers";

export const rootReducers = combineReducers({
  dataReducers,
  formReducers,
  alertsReducers,
});
