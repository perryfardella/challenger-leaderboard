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

function Leaderboard() {
  const { server } = useSelector((state: AppState) => state.server);
  const serverDispatch = useDispatch<Dispatch<ServerActions>>();
  const [playerInfo, setPlayerInfo] = useState([]);
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
    const link: string =
      "https://" +
      server +
      ".api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5";
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
    } catch (error) {
      console.log(error);
      setBadRequest(true);
      setPlayerInfo([]);
      setLoading(false);
    }
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
