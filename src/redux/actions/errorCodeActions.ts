export interface ISetErrorCodeAction {
    readonly type: 'SET_ERRORCODE';
    payload: string;
}
export type ErrorCodeActions =
| ISetErrorCodeAction