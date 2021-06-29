import { LeagueInfoActions } from "../actions/leagueInfoActions";
type LeagueInfoState = {
  leagueinfo: any;
};
const initialState: LeagueInfoState = {
  leagueinfo: {},
};
const LeagueInfoReducer = (
  state: LeagueInfoState = initialState,
  action: LeagueInfoActions
) => {
  switch (action.type) {
    case "SET_LEAGUEINFO":
      return {
        ...state,
        leagueinfo: action.payload,
      };
    default:
      return state;
  }
};
export default LeagueInfoReducer;
