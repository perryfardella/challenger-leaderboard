import React from "react";
import Mainpage from "./components/MainPage";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Theme from "./Theme";
import "./App.css";
import AppBar from "./components/AppBar";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AppBar />
      <Mainpage />
    </ThemeProvider>
  );
}

export default App;
