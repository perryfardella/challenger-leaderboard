import { FilterActions } from "../actions/filterActions";
type FilterState = {
  filter: string;
};
const initialState: FilterState = {
  filter: "",
};
const FilterReducer = (
  state: FilterState = initialState,
  action: FilterActions
) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
export default FilterReducer;
