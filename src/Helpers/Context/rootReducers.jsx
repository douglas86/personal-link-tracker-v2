import { combineReducers } from "./combineReducers";
import {
  dataReducers,
  categoryReducers,
  formReducers,
  alertsReducers,
} from "../../Context/reducers";

export const rootReducers = combineReducers({
  dataReducers,
  categoryReducers,
  formReducers,
  alertsReducers,
});
