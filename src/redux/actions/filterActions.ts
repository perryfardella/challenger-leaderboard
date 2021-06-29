export interface ISetFilterAction {
  readonly type: "SET_FILTER";
  payload: string;
}
export type FilterActions = ISetFilterAction;
