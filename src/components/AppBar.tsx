import React from "react";

import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";

export default function AppBar() {
  return (
    <MuiAppBar color="primary" position="sticky">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuRounded />
        </IconButton>
        <Typography variant="h6">Challenger Leaderboard</Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
