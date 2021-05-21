import { combineReducers } from 'redux'
import dataLoadingReducer from './dataLoadingReducer'
import serverReducer from './serverReducer';
import errorCodeReducer from './errorCodeReducer';
const rootReducer = combineReducers({
    dataLoading: dataLoadingReducer,
    server: serverReducer,
    errorCode: errorCodeReducer,
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;