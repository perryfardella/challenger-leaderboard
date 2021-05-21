import { DataLoadingActions } from "../actions/dataLoadingActions";
type DataLoadingState = {
    dataLoading: boolean;
}
const initialState: DataLoadingState = {
    dataLoading: false,
}
const dataLoadingReducer = (state: DataLoadingState = initialState, action: DataLoadingActions) => {
    switch(action.type) {
        case 'SET_FALSE':
            return {
                ...state,
                dataLoading: false,
            }
        case 'SET_TRUE':
            return {
                ...state,
                dataLoading: true,
            }
        default:
            return state;
    }
}
export default dataLoadingReducer;