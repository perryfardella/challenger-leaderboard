import { combineReducers } from 'redux'
import dataLoadingReducer from './dataLoadingReducer'
import serverReducer from './serverReducer';
const rootReducer = combineReducers({
    dataLoading: dataLoadingReducer,
    server: serverReducer,
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;