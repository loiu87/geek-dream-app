/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import styled from "styled-components";
import * as XLSX from "xlsx";
import { DataContext } from "./RouteControler";

const convertToJson = (csv) => {
  var lines = csv.split("\n");
  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }
  return result;
};

export default () => {
  const { setData } = useContext(DataContext);

  const readExcel = async (event) => {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = async () => {
      let data = reader.result;
      let workBook = XLSX.read(data, { type: "binary" });
      const sheetName = workBook.SheetNames[0];
      let workSheet = workBook.Sheets[sheetName];
      const result = XLSX.utils.sheet_to_csv(workSheet, { header: 1 });
      setData(convertToJson(result));
    };
    await reader.readAsBinaryString(input.files[0]);
  };

  return (
    <Container>
      <h1>file uploader</h1>
      <input
        type="file"
        id="excelFile"
        onChange={(event) => {
          return readExcel(event);
        }}
      />
    </Container>
  );
};

const Container = styled.div``;
