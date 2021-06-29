import Leaderboard from "./Leaderboard";
import ServerSelector from "./ServerSelector";

import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import CircularProgress from "@material-ui/core/CircularProgress";

function MainPage() {
  const { dataLoading } = useSelector((state: AppState) => state.dataLoading);
  return (
    <div>
      <ServerSelector />
      {dataLoading ? <CircularProgress /> : ""}
      <Leaderboard />
    </div>
  );
}

export default MainPage;
