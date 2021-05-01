import React, { useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

function MainPage() {
  const classes = useStyles();
  const [region, setRegion] = useState("");
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-label">Server</InputLabel>
      <Select labelId="select-label" value={region}>
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
    </FormControl>
  );
}

export default MainPage;
