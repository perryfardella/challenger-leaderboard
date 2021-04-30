import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";

function MainPage() {
  const [region, setRegion] = useState("");
  return (
    <Select>
      <MenuItem value={"BR1"}>Brazil</MenuItem>
      <MenuItem value={"EUN1"}>Europe Nordic & East</MenuItem>
      <MenuItem value={"EUW1"}>Europe West</MenuItem>
      <MenuItem value={"JP1"}>Japan</MenuItem>
      <MenuItem value={"KR"}>Korea</MenuItem>
      <MenuItem value={"LA1"}>Latin America North</MenuItem>
      <MenuItem value={"LA2"}>Latin America South</MenuItem>
      <MenuItem value={"NA1"}>North America</MenuItem>
      <MenuItem value={"OC1"}>Oceania</MenuItem>
      <MenuItem value={"RU"}>Russia</MenuItem>
      <MenuItem value={"TR1"}>Turkey</MenuItem>
    </Select>
  );
}

export default MainPage;
