import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Typography,
} from "@material-ui/core";

function Leaderboard() {
  const { leagueInfo } = useSelector((state: AppState) => state.leagueInfo);
  const { dataLoading } = useSelector((state: AppState) => state.dataLoading);

  // Counter used for the first column in the leaderboard
  var summonerRanking = 0;

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
          {leagueInfo && !dataLoading
            ? leagueInfo.entries.map((x) => {
                summonerRanking++;
                return (
                  <TableRow hover>
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
