import React from "react";
import Mainpage from "./components/MainPage";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Theme from "./Theme";
import "./App.css";
import AppBar from "./components/AppBar";
import BodyContent from "./components/BodyContent";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AppBar />
      <BodyContent />
    </ThemeProvider>
  );
}

export default App;
