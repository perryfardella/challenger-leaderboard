import { combineReducers } from 'redux'
import countReducer from './countReducer'
import serverReducer from './serverReducer';
const rootReducer = combineReducers({
    count: countReducer,
    server: serverReducer,
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;