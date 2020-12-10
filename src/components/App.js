/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes isLoggedIn={isLoggedIn} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
