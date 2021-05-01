import React, { Dispatch } from "react";
import Leaderboard from "./Leaderboard";
import RegionSelector from "./ServerSelector";

import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { DataLoadingActions } from "../redux/actions/dataLoadingActions";

function MainPage() {
  const { dataLoading } = useSelector((state: AppState) => state.dataLoading);
  return (
    <div>
      <RegionSelector />
      {dataLoading ? "Data is loading" : "Data is NOT loading"}
      <Leaderboard />
    </div>
  );
}

export default MainPage;
