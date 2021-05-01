import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducter'
import { devToolsEnhancer } from 'redux-devtools-extension'
const store = createStore(rootReducer, devToolsEnhancer({}));
export default store;