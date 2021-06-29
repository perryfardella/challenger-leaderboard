import { LeagueInfoActions } from "../actions/leagueInfoActions";
import { LeagueData } from "../../interfaces";

type LeagueInfoState = {
  leagueInfo: LeagueData;
};
const initialState: LeagueInfoState = {
  leagueInfo: {
    tier: "",
    leagueId: "",
    queue: "",
    name: "",
    entries: [],
  },
};
const LeagueInfoReducer = (
  state: LeagueInfoState = initialState,
  action: LeagueInfoActions
) => {
  switch (action.type) {
    case "SET_LEAGUEINFO":
      return {
        ...state,
        leagueInfo: action.payload,
      };
    default:
      return state;
  }
};
export default LeagueInfoReducer;
