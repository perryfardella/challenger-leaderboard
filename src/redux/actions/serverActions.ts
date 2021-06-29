export interface ISetServerAction {
  readonly type: "SET_SERVER";
  payload: string;
}
export type ServerActions = ISetServerAction;
