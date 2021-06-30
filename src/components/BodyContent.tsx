import React from "react";

import { makeStyles } from "@material-ui/core";
import MainPage from "./MainPage";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
    maxWidth: "57rem",
    padding: "2rem 0",
  },
}));

export default function BodyContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      {children}
      {/* <MainPage /> */}
    </main>
  );
}
