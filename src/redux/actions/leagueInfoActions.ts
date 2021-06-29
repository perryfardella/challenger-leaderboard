export interface ISetLeagueInfoAction {
  readonly type: "SET_LEAGUEINFO";
  payload: string;
}
export type LeagueInfoActions = ISetLeagueInfoAction;
