import React from "react";
import { Route, Switch } from "react-router-dom";
import MatchHistoryPage from "./components/MatchHistoryPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/match-history" component={MatchHistoryPage} />
    </Switch>
  );
}
