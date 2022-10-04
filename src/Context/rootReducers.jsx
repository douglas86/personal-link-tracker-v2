import { combineReducers } from "./combineReducers";
import { dataReducers } from "./reducers";

export const rootReducers = combineReducers({ dataReducers });
