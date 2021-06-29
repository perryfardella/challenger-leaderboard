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

  // function sortSummonerData(filter: string = "rank") {
  //   const data = leagueInfo!.entries;
  //   console.log(filter);

  //   if (filter === "rank") {
  //     console.log("sorting by rank");
  //     data.sort(function (a: SummonerData, b: SummonerData) {
  //       return b.leaguePoints - a.leaguePoints;
  //     });
  //     console.log(data);
  //   } else {
  //     console.log("sorting by name");
  //     data.sort((a: SummonerData, b: SummonerData) =>
  //       a.summonerName.localeCompare(b.summonerName)
  //     );
  //     console.log(data);
  //   }

  //   setSummonerInfo(data);
  // }

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
