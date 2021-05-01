import React, { useState, useEffect } from "react";
import { apiKey } from "../api-key/API.key";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from "@material-ui/core";

function Leaderboard() {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [badRequest, setBadRequest] = useState(false);
  const [loading, setLoading] = useState(false);

  //use effect (function, array of values)
  //when a value changes in the array, the function is re-run

  // Need to pass info region
  useEffect(() => {
    fetchPlayerInfo();
  }, []);

  //empty array = component did mount, call on component mounting, only calls once

  // Takes region as parameter for the API key
  async function fetchPlayerInfo() {
    setBadRequest(false);
    setLoading(true);
    try {
      // Insert API link below
      const response = await fetch("API placeholder");
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
      {console.log(apiKey)}
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