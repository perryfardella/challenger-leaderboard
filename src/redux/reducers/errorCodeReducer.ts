import { ErrorCodeActions } from "../actions/errorCodeActions"
type ErrorCodeState = {
errorCode: string;
}
const initialState: ErrorCodeState = {
errorCode: '',
}
const ErrorCodeReducer = (state: ErrorCodeState = initialState, action: ErrorCodeActions) => {
    switch(action.type) {
        case 'SET_ERRORCODE':
            return {
                ...state,
                server: action.payload,
            }
        default:
            return state;
    }
}
export default ErrorCodeReducer;