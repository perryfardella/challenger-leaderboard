import React, { useState, useEffect, Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { DataLoadingActions } from "../redux/actions/dataLoadingActions";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Typography,
} from "@material-ui/core";
import { SummonerData } from "../interfaces";

function Leaderboard() {
  const { server } = useSelector((state: AppState) => state.server);
  const { filter } = useSelector((state: AppState) => state.filter);
  const { leagueInfo } = useSelector((state: AppState) => state.leagueInfo);
  const { dataLoading } = useSelector((state: AppState) => state.dataLoading);
  const dataLoadingDispatch = useDispatch<Dispatch<DataLoadingActions>>();
  // const [leagueInfo, setLeagueInfo] = useState<LeagueData | undefined>(
  //   undefined
  // );
  const [summonerInfo, setSummonerInfo] = useState<SummonerData[] | undefined>(
    undefined
  );

  //Probably need to use this for error handling
  const [badRequest, setBadRequest] = useState<boolean>(false);

  var summonerRanking = 0;

  // useEffect(() => {
  //   if (server) {
  //     fetchPlayerInfo();
  //     summonerRanking = 0;
  //     // sortSummonerData(filter ? filter : "rank");
  //   }
  // }, [server]);

  // // If the filter is changed, re-sort the data
  // useEffect(() => {
  //   if (filter) {
  //     if (leagueInfo) {
  //       sortSummonerData(filter ? filter : "rank");
  //     }
  //   }
  // }, [filter]);

  // useEffect(() => {
  //   if (leagueInfo) {
  //     sortSummonerData(filter ? filter : "rank");
  //   }
  // }, [leagueInfo]);

  // async function fetchPlayerInfo() {
  //   setBadRequest(false);
  //   dataLoadingDispatch({ type: "SET_TRUE" });
  //   const link: string = "/" + server;
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
  //     const data = await response.json();
  //     console.log(data);
  //     setLeagueInfo(data);
  //     dataLoadingDispatch({ type: "SET_FALSE" });
  //   } catch (error) {
  //     console.log(error);
  //     setBadRequest(true);
  //     setLeagueInfo(undefined);
  //     dataLoadingDispatch({ type: "SET_FALSE" });
  //   }
  // }

  function sortSummonerData(filter: string = "rank") {
    const data = leagueInfo!.entries;
    console.log(filter);

    if (filter === "rank") {
      console.log("sorting by rank");
      data.sort(function (a: SummonerData, b: SummonerData) {
        return b.leaguePoints - a.leaguePoints;
      });
      console.log(data);
    } else {
      console.log("sorting by name");
      data.sort((a: SummonerData, b: SummonerData) =>
        a.summonerName.localeCompare(b.summonerName)
      );
      console.log(data);
    }

    setSummonerInfo(data);
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Ranking</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Summoner Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">League Points</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summonerInfo && !dataLoading
            ? summonerInfo.map((x) => {
                summonerRanking++;
                return (
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1">{summonerRanking}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{x.summonerName}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{x.leaguePoints}</Typography>
                    </TableCell>
                  </TableRow>
                );
              })
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Leaderboard;
