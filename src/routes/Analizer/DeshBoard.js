/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "./RouteControler";

function DashBoard() {
  const { data } = useContext(DataContext);
  const [avrgNumOfClaim, setAvergeNumOfClaim] = useState(1);
  const [avrgNumOfInventer, setAvrgNumOfInventer] = useState(1);
  const [avrgNumOfIPC, setAvrgNumOfIPC] = useState(1);

  return (
    <Wrapper>
      <h1>DashBoard</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default DashBoard;
