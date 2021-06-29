import React, { useState, useEffect, Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { FilterActions } from "../redux/actions/filterActions";
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
  const { filter } = useSelector((state: AppState) => state.filter);
  const filterDispatch = useDispatch<Dispatch<FilterActions>>();
  const classes = useStyles();

  const handleFilterChange = (e: any) => {
    filterDispatch({ type: "SET_FILTER", payload: e.target.value });
  };

  return (
    <FormControl className={classes.formControl} style={{ minWidth: 200 }}>
      <InputLabel id="select-filter">Filter Results By</InputLabel>
      <Select
        labelId="select-filter"
        onChange={handleFilterChange}
        value={filter ? filter : ""}
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
