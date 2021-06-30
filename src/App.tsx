import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Theme from "./Theme";
import "./App.css";
import AppBar from "./components/AppBar";
import BodyContent from "./components/BodyContent";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar />
        <BodyContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
