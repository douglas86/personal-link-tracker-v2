import { combineReducers } from "./combineReducers";
import {
  dataReducers,
  categoryReducers,
  formReducers,
} from "../../Context/reducers";

export const rootReducers = combineReducers({
  dataReducers,
  categoryReducers,
  formReducers,
});
