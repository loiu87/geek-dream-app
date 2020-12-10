/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as XLSX from "xlsx";

const convertToJson = (csv) => {
  var lines = csv.split("\n");
  // console.log(lines);
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
  const [objData, setObjData] = useState("");

  const readExcel = (event) => {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = function () {
      let data = reader.result;
      let workBook = XLSX.read(data, { type: "binary" });
      workBook.SheetNames.forEach(function (sheetName) {
        console.log("SheetName: " + sheetName);
        let workSheet = workBook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_csv(workSheet, { header: 1 });
        setObjData(convertToJson(data));
      });
    };
    reader.readAsBinaryString(input.files[0]);
  };

  useEffect(() => {
    console.log(objData);
  }, [objData]);

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
