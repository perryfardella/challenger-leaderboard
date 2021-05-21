import React, { useState, useEffect, Dispatch } from "react";
import { apiKey } from "../api-key/API.key";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { ServerActions } from "../redux/actions/serverActions";
import { DataLoadingActions } from "../redux/actions/dataLoadingActions";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: "50%",
  },
});

interface LeagueData {
  tier: string;
  leagueId: string;
  queue: string;
  name: string;
  entries: SummonerData[];
}

interface SummonerData {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leaguePoints: number;
  losses: number;
  rank: string;
  summonerId: string;
  summonerName: string;
  veteran: boolean;
  wins: number;
}

function Leaderboard() {
  const classes = useStyles();

  const { server } = useSelector((state: AppState) => state.server);
  const dataLoadingDispatch = useDispatch<Dispatch<DataLoadingActions>>();
  const [leagueInfo, setLeagueInfo] =
    useState<LeagueData | undefined>(undefined);
  const [summonerInfo, setSummonerInfo] =
    useState<SummonerData[] | undefined>(undefined);

  //Probably need to use this for error handling
  const [badRequest, setBadRequest] = useState<boolean>(false);

  var summonerRanking = 0;

  useEffect(() => {
    if (server) {
      fetchPlayerInfo();
      summonerRanking = 0;
    }
  }, [server]);

  useEffect(() => {
    if (leagueInfo) {
      isolateSummonerData();
    }
  }, [leagueInfo]);

  async function fetchPlayerInfo() {
    setBadRequest(false);
    dataLoadingDispatch({ type: "SET_TRUE" });
    const link: string = "/" + server;
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
      const data = await response.json();
      console.log(data);
      setLeagueInfo(data);
      dataLoadingDispatch({ type: "SET_FALSE" });
    } catch (error) {
      console.log(error);
      setBadRequest(true);
      setLeagueInfo(undefined);
      dataLoadingDispatch({ type: "SET_FALSE" });
    }
  }

  function isolateSummonerData() {
    const data = leagueInfo!.entries;
    data.sort(function (a, b) {
      return b.leaguePoints - a.leaguePoints;
    });

    setSummonerInfo(data);
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ranking</TableCell>
            <TableCell>Summoner Name</TableCell>
            <TableCell>League Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summonerInfo
            ? summonerInfo.map((x) => {
                summonerRanking++;
                return (
                  <TableRow>
                    <TableCell>{summonerRanking}</TableCell>
                    <TableCell>{x.summonerName}</TableCell>
                    <TableCell>{x.leaguePoints}</TableCell>
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
