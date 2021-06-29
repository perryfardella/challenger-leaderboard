import React, { useState, useEffect, Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { ServerActions } from "../redux/actions/serverActions";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

function FilterSelector() {
  const { server } = useSelector((state: AppState) => state.server);
  const serverDispatch = useDispatch<Dispatch<ServerActions>>();
  const classes = useStyles();

  const handleRegionChange = (e: any) => {
    serverDispatch({ type: "SET_SERVER", payload: e.target.value });
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-label">Server</InputLabel>
      <Select
        labelId="select-label"
        onChange={handleRegionChange}
        value={server ? server : ""}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
      >
        <MenuItem value={"rank"}>Summoner Rank</MenuItem>
        <MenuItem value={"name"}>Summoner Name</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterSelector;
