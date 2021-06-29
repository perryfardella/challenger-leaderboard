import React from "react";

import { Divider, makeStyles } from "@material-ui/core";
import MainPage from "./MainPage";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    maxWidth: "57rem",
    padding: "2rem 0",
  },
}));

export default function BodyContent() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <MainPage />
    </main>
  );
}
