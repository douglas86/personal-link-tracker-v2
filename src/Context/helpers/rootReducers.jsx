import { combineReducers } from "./combineReducers";
import { dataReducers, categoryReducers, formReducers } from "../reducers";

export const rootReducers = combineReducers({
  dataReducers,
  categoryReducers,
  formReducers,
});
