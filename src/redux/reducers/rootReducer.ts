import { combineReducers } from "redux";
import dataLoadingReducer from "./dataLoadingReducer";
import serverReducer from "./serverReducer";
import filterReducer from "./filterReducer";
import errorCodeReducer from "./errorCodeReducer";
import leagueInfoReducer from "./leagueInfoReducer";

const rootReducer = combineReducers({
  dataLoading: dataLoadingReducer,
  server: serverReducer,
  errorCode: errorCodeReducer,
  filter: filterReducer,
  leagueInfo: leagueInfoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
