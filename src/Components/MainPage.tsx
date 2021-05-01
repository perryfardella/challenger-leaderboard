import React from "react";
import Leaderboard from "./Leaderboard";
import RegionSelector from "./ServerSelector";

function MainPage() {
  return (
    <div>
      <RegionSelector />
      <Leaderboard />
    </div>
  );
}

export default MainPage;
