import React from "react";
import Leaderboard from "./Leaderboard";
import RegionSelector from "./RegionSelector";

function MainPage() {
  return (
    <div>
      <RegionSelector />
      <Leaderboard />
    </div>
  );
}

export default MainPage;
