/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import calculateRights from "../../computer/calculateRights";
import calculateTechnology from "../../computer/calculateTechnology";
import { calculateMarket } from "../../computer/claculateMarket";
import clmnDaysAverage from "../../computer/clmnDaysAverage";
import clmnOrSmblAverage from "../../computer/clmnOrSmblAverage";
import clmnYearAverage from "../../computer/clmnYearAverage";
import columnAverage from "../../computer/columnAverage";
import { INDEX } from "../../constants";
import exportExcel from "../../util/exportExcel";
import { DataContext } from "./RouteControler";

function DashBoard() {
  const { data } = useContext(DataContext);
  const [avrgNumOfClaim, setAvrgNumOfClaim] = useState(1);
  const [avrgNumOfInventors, setAvrgNumOfInventors] = useState(1);
  const [avrgNumOfIPC, setAvrgNumOfIPC] = useState(1);
  const [avrgRemainingYears, setAvrgRemainingYears] = useState(1);
  const [avrgNumOfFamilyPatent, setAvrgNumOfFamilyPatent] = useState(1);
  const [avrgNumOfFamilyContry, setAvrgNumOfFamilyContry] = useState(1);
  const [avrgPublicationDays, setAvrgPublicationDays] = useState(1);
  const now = new Date();
  const nowYear = now.getFullYear();

  const handleData = async () => {
    await getData(
      data,
      now,
      nowYear,
      setAvrgNumOfClaim,
      setAvrgNumOfInventors,
      setAvrgNumOfIPC,
      setAvrgRemainingYears,
      setAvrgNumOfFamilyPatent,
      setAvrgNumOfFamilyContry,
      setAvrgPublicationDays
    );
    await setCalculatedData(
      data,
      now,
      nowYear,
      avrgNumOfClaim,
      avrgNumOfInventors,
      avrgNumOfIPC,
      avrgRemainingYears,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry,
      avrgPublicationDays
    );
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Wrapper>
      <h1>DashBoard</h1>

      <button
        style={{ margin: 15 }}
        onClick={() => {
          exportExcel(data);
        }}
      >
        Down Load Excel
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const getData = async (
  data,
  now,
  nowYear,
  setAvrgNumOfClaim,
  setAvrgNumOfInventors,
  setAvrgNumOfIPC,
  setAvrgRemainingYears,
  setAvrgNumOfFamilyPatent,
  setAvrgNumOfFamilyContry,
  setAvrgPublicationDays
) => {
  setAvrgNumOfClaim(columnAverage({ datas: data, index: INDEX.numOfClaim }));
  setAvrgNumOfInventors(
    columnAverage({ datas: data, index: INDEX.numOfInventors })
  );
  setAvrgNumOfIPC(clmnOrSmblAverage({ datas: data, index: INDEX.IPC }));
  setAvrgRemainingYears(
    clmnYearAverage({ nowYear, datas: data, index: INDEX.filingDate })
  );
  setAvrgNumOfFamilyPatent(
    columnAverage({ datas: data, index: INDEX.numOfFamilyPatent })
  );
  setAvrgNumOfFamilyContry(
    columnAverage({ datas: data, index: INDEX.numOfFamilyContry })
  );
  setAvrgPublicationDays(
    clmnDaysAverage({ now, datas: data, index: INDEX.releaseDate })
  );
};

const setCalculatedData = async (
  data,
  now,
  nowYear,
  avrgNumOfClaim,
  avrgNumOfInventors,
  avrgNumOfIPC,
  avrgRemainingYears,
  avrgNumOfFamilyPatent,
  avrgNumOfFamilyContry,
  avrgPublicationDays
) => {
  data.map((data) => {
    const values = Object.values(data);
    calculateTechnology(
      data,
      values,
      avrgNumOfClaim,
      avrgNumOfInventors,
      avrgNumOfIPC
    );
    calculateRights(
      data,
      nowYear,
      values,
      avrgNumOfClaim,
      avrgNumOfInventors,
      avrgRemainingYears,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry
    );
    calculateMarket(
      data,
      now,
      values,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry,
      avrgPublicationDays
    );
  });
};

export default DashBoard;
