import { ServerActions } from "../actions/serverActions";
type ServerState = {
  server: string;
};
const initialState: ServerState = {
  server: "",
};
const ServerReducer = (
  state: ServerState = initialState,
  action: ServerActions
) => {
  switch (action.type) {
    case "SET_SERVER":
      return {
        ...state,
        server: action.payload,
      };
    default:
      return state;
  }
};
export default ServerReducer;
