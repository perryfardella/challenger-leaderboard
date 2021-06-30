import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage";
import MatchHistoryPage from "./components/MatchHistoryPage";
import ServerStatusPage from "./components/ServerStatusPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/leaderboard" />
      </Route>
      <Route path="/leaderboard" component={MainPage} />
      <Route path="/match-history" component={MatchHistoryPage} />
      <Route path="/server-status" component={ServerStatusPage} />
    </Switch>
  );
}
