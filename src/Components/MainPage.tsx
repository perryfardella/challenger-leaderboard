import Leaderboard from "./Leaderboard";
import ServerSelector from "./ServerSelector";

import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import CircularProgress from "@material-ui/core/CircularProgress";
import FilterSelector from "./FilterSelector";

function MainPage() {
  const { dataLoading } = useSelector((state: AppState) => state.dataLoading);
  return (
    <div>
      <ServerSelector />
      <FilterSelector />
      {dataLoading ? <CircularProgress /> : ""}
      <Leaderboard />
    </div>
  );
}

export default MainPage;
