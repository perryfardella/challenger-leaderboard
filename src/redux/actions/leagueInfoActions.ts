import { LeagueData } from "../../interfaces";

export interface ISetLeagueInfoAction {
  readonly type: "SET_LEAGUEINFO";
  payload: LeagueData;
}
export type LeagueInfoActions = ISetLeagueInfoAction;
