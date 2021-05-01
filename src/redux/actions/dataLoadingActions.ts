export interface ISetDataLoadingFalseAction {
    readonly type: 'SET_FALSE';
}
export interface ISetDataLoadingTrueAction {
    readonly type: 'SET_TRUE';
}
export type DataLoadingActions =
| ISetDataLoadingFalseAction
| ISetDataLoadingTrueAction