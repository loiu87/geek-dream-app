/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AppRouter from "./Router";
import { useQuery } from "react-apollo-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppRouter isLoggedIn={isLoggedIn} />
      </Router>
    </ThemeProvider>
  );
};
