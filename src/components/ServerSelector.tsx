import React, { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { ServerActions } from "../redux/actions/serverActions";
import { DataLoadingActions } from "../redux/actions/dataLoadingActions";
import { LeagueInfoActions } from "../redux/actions/leagueInfoActions";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { apiKey } from "../api-key/API.key";
import { LeagueData, SummonerData } from "../interfaces";

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
  const { filter } = useSelector((state: AppState) => state.filter);
  const serverDispatch = useDispatch<Dispatch<ServerActions>>();

  const { dataLoading } = useSelector((state: AppState) => state.dataLoading);
  const dataLoadingDispatch = useDispatch<Dispatch<DataLoadingActions>>();
  const { leagueInfo } = useSelector((state: AppState) => state.leagueInfo);
  const leagueInfoDispatch = useDispatch<Dispatch<LeagueInfoActions>>();
  const classes = useStyles();

  async function fetchPlayerInfo(newServer: string) {
    //setBadRequest(false);
    dataLoadingDispatch({ type: "SET_TRUE" });
    const link: string = "/" + newServer;
    try {
      const response = await fetch(link, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
          "Accept-Language":
            "en-AU,en;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-GB;q=0.6,en-US;q=0.5",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          Origin: "https://developer.riotgames.com",
          "X-Riot-Token": apiKey,
        },
      });
      const dataFromAPI: LeagueData = await response.json();
      console.log(dataFromAPI);
      //setLeagueInfo(data);
      //leagueInfoDispatch({ type: "SET_LEAGUEINFO", payload: data });
      let sortedData = sortSummonerData(dataFromAPI, filter);
      leagueInfoDispatch({ type: "SET_LEAGUEINFO", payload: sortedData });
      dataLoadingDispatch({ type: "SET_FALSE" });
    } catch (error) {
      console.log(error);
      //setBadRequest(true);
      //setLeagueInfo(undefined);
      //leagueInfoDispatch({}); NEED TO FIX
      dataLoadingDispatch({ type: "SET_FALSE" });
    }
  }

  // Need to add new proxies for making server status requests to the API
  // async function fetchServerInfo(newServer: string) {
  //   //setBadRequest(false);
  //   dataLoadingDispatch({ type: "SET_TRUE" });
  //   const link: string = "/" + newServer;
  //   try {
  //     const response = await fetch(link, {
  //       headers: {
  //         "User-Agent":
  //           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
  //         "Accept-Language":
  //           "en-AU,en;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-GB;q=0.6,en-US;q=0.5",
  //         "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
  //         Origin: "https://developer.riotgames.com",
  //         "X-Riot-Token": apiKey,
  //       },
  //     });
  //     const dataFromAPI = await response.json();
  //     console.log(dataFromAPI);
  //     //setLeagueInfo(data);
  //     //leagueInfoDispatch({ type: "SET_LEAGUEINFO", payload: data });
  //     let sortedData = sortSummonerData(dataFromAPI, filter);
  //     leagueInfoDispatch({ type: "SET_LEAGUEINFO", payload: sortedData });
  //     dataLoadingDispatch({ type: "SET_FALSE" });
  //   } catch (error) {
  //     console.log(error);
  //     //setBadRequest(true);
  //     //setLeagueInfo(undefined);
  //     //leagueInfoDispatch({}); NEED TO FIX
  //     dataLoadingDispatch({ type: "SET_FALSE" });
  //   }
  // }

  function sortSummonerData(data: LeagueData, filter: string = "rank") {
    console.log(filter);

    if (filter === "rank") {
      console.log("sorting by rank");
      data.entries.sort(function (a: SummonerData, b: SummonerData) {
        return b.leaguePoints - a.leaguePoints;
      });
      console.log(data);
    } else {
      console.log("sorting by name");
      data.entries.sort((a: SummonerData, b: SummonerData) =>
        a.summonerName.localeCompare(b.summonerName)
      );
      console.log(data);
    }

    return data;
  }

  const handleRegionChange = (e: any) => {
    serverDispatch({ type: "SET_SERVER", payload: e.target.value });
    fetchPlayerInfo(e.target.value);
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
