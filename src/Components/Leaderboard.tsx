import React, { useState, useEffect, Dispatch } from "react";
import { apiKey } from "../api-key/API.key";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { ServerActions } from "../redux/actions/serverActions";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from "@material-ui/core";

interface LeagueData {
  tier: string;
  leagueId: string;
  queue: string;
  name: string;
  entries: PlayerData[];
}

interface PlayerData {
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
  const { server } = useSelector((state: AppState) => state.server);
  const serverDispatch = useDispatch<Dispatch<ServerActions>>();
  const [playerInfo, setPlayerInfo] = useState("");
  const [numberPlayers, setNumberPlayers] = useState(0);
  const [badRequest, setBadRequest] = useState(false);
  const [loading, setLoading] = useState(false);

  //use effect (function, array of values)
  //when a value changes in the array, the function is re-run

  // if server changes, fetch data
  useEffect(() => {
    if (server) {
      fetchPlayerInfo();
    }
  }, [server]);

  async function fetchPlayerInfo() {
    setBadRequest(false);
    setLoading(true);
    const link: string = "/" + server;
    try {
      // Insert API link below
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
      setPlayerInfo(data);
      setLoading(false);
      isolatePlayerData();
    } catch (error) {
      console.log(error);
      setBadRequest(true);
      setPlayerInfo("");
      setLoading(false);
    }
  }

  function isolatePlayerData() {
    const json = JSON.parse(playerInfo);
    setPlayerInfo(json.entries);
    console.log(playerInfo);
  }

  // Probably need to create an interface for the typescript data
  function generateTableRow(summonerInfo: any) {
    return (
      <TableRow>
        <TableCell>{"Rank Number"}</TableCell>
        <TableCell>{summonerInfo.summonerName}</TableCell>
        <TableCell>{summonerInfo.leaguePoints}</TableCell>
      </TableRow>
    );
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
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>A</TableCell>
            <TableCell>500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>B</TableCell>
            <TableCell>400</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>C</TableCell>
            <TableCell>300</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Leaderboard;
