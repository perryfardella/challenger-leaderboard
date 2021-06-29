import { combineReducers } from "redux";
import dataLoadingReducer from "./dataLoadingReducer";
import serverReducer from "./serverReducer";
import filterReducer from "./filterReducer";
import errorCodeReducer from "./errorCodeReducer";
import LeagueInfoReducer from "./leagueInfoReducer";

const rootReducer = combineReducers({
  dataLoading: dataLoadingReducer,
  server: serverReducer,
  errorCode: errorCodeReducer,
  filter: filterReducer,
  leagueInfo: LeagueInfoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
