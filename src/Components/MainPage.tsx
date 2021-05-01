import React, { Dispatch } from "react";
import Leaderboard from "./Leaderboard";
import RegionSelector from "./ServerSelector";

import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { DataLoadingActions } from "../redux/actions/dataLoadingActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

function MainPage() {
  const classes = useStyles();
  const { dataLoading } = useSelector((state: AppState) => state.dataLoading);
  return (
    <div>
      <RegionSelector />
      {dataLoading ? <CircularProgress /> : ""}
      <Leaderboard />
    </div>
  );
}

export default MainPage;
