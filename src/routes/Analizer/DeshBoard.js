/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import calculateRights from "../../computer/calculateRights";
import calculateTechnology from "../../computer/calculateTechnology";
import clmnDaysAverage from "../../computer/clmnDaysAverage";
import clmnOrSmblAverage from "../../computer/clmnOrSmblAverage";
import clmnYearAverage from "../../computer/clmnYearAverage";
import columnAverage from "../../computer/columnAverage";
import { DataContext } from "./RouteControler";

function DashBoard() {
  const { data } = useContext(DataContext);
  const [avrgNumOfClaim, setAvrgNumOfClaim] = useState(1);
  const [avrgNumOfInventer, setAvrgNumOfInventer] = useState(1);
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
      setAvrgNumOfInventer,
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
      avrgNumOfInventer,
      avrgNumOfIPC,
      avrgRemainingYears,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry
    );
  };

  useEffect(() => {
    handleData();
  }, []);
  useEffect(() => {
    console.log(`avrgPublicationDays:${avrgPublicationDays}`);
  }, [avrgPublicationDays]);

  return (
    <Wrapper>
      <h1>DashBoard</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const getData = async (
  data,
  now,
  nowYear,
  setAvrgNumOfClaim,
  setAvrgNumOfInventer,
  setAvrgNumOfIPC,
  setAvrgRemainingYears,
  setAvrgNumOfFamilyPatent,
  setAvrgNumOfFamilyContry,
  setAvrgPublicationDays
) => {
  setAvrgNumOfClaim(columnAverage({ datas: data, index: 6 }));
  setAvrgNumOfInventer(columnAverage({ datas: data, index: 7 }));
  setAvrgNumOfIPC(clmnOrSmblAverage({ datas: data, index: 8 }));
  setAvrgRemainingYears(clmnYearAverage({ nowYear, datas: data, index: 3 }));
  setAvrgNumOfFamilyPatent(columnAverage({ datas: data, index: 9 }));
  setAvrgNumOfFamilyContry(columnAverage({ datas: data, index: 10 }));
  setAvrgPublicationDays(clmnDaysAverage({ now, datas: data, index: 4 })); // todo
};

const setCalculatedData = async (
  data,
  now,
  nowYear,
  avrgNumOfClaim,
  avrgNumOfInventer,
  avrgNumOfIPC,
  avrgRemainingYears,
  avrgNumOfFamilyPatent,
  avrgNumOfFamilyContry
) => {
  data.map((data) => {
    const values = Object.values(data);
    calculateTechnology(
      data,
      values,
      avrgNumOfClaim,
      avrgNumOfInventer,
      avrgNumOfIPC
    );
    calculateRights(
      data,
      nowYear,
      values,
      avrgNumOfClaim,
      avrgNumOfInventer,
      avrgRemainingYears,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry
    );
    calculateMarket(
      data,
      now,
      values,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry
    );
    console.log(data);
  });
};
const calculateMarket = (
  data,
  now,
  values,
  avrgNumOfFamilyPatent,
  avrgNumOfFamilyContry
) => {
  if (values[0]) {
    const marketDefence = parseInt(values[9]) / avrgNumOfFamilyPatent;
    const marketEntry = parseInt(values[10]) / avrgNumOfFamilyContry;
    data["시장의 확보성"] = marketDefence;
    data["시장의 진출성"] = marketEntry;
    data["배점: 시장의 확보성"] =
      marketDefence >= 1.0
        ? 4
        : marketDefence >= 0.8
        ? 3
        : marketDefence >= 0.6
        ? 2
        : 1;
    data["배점: 시장의 진출성"] =
      marketEntry >= 1.5
        ? 4
        : marketEntry >= 1.0
        ? 3
        : marketEntry >= 0.5
        ? 2
        : 1;
  }
};
export default DashBoard;
