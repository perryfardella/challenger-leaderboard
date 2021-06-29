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

function ServerSelector() {
  const { server } = useSelector((state: AppState) => state.server);
  const serverDispatch = useDispatch<Dispatch<ServerActions>>();
  const classes = useStyles();

  const handleRegionChange = (e: any) => {
    serverDispatch({ type: "SET_SERVER", payload: e.target.value });
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-server">Server</InputLabel>
      <Select
        labelId="select-server"
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
        <MenuItem value={"BR1"}>Brazil</MenuItem>
        <MenuItem value={"EUN1"}>Europe Nordic And East</MenuItem>
        <MenuItem value={"EUW1"}>Europe West</MenuItem>
        <MenuItem value={"JP1"}>Japan</MenuItem>
        <MenuItem value={"KR"}>Korea</MenuItem>
        <MenuItem value={"LA1"}>Latin America North</MenuItem>
        <MenuItem value={"LA2"}>Latin America South</MenuItem>
        <MenuItem value={"NA1"}>North America</MenuItem>
        <MenuItem value={"OC1"}>Oceania</MenuItem>
        <MenuItem value={"RU"}>Russia</MenuItem>
        <MenuItem value={"TR1"}>Turkey</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ServerSelector;
