/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import {
  CREATE_SHEET,
  GET_SHEETS,
  LOCAL_LOG_OUT,
  GET_SHEET,
} from "./AnalizerQuery";
import RawFileUploadPresenter from "./RawFileUploadPresenter";
import { DataContext } from "./RouteControler";
import { convertToJson } from "./util/convertToJson";

export default () => {
  const { setData } = useContext(DataContext);
  const [rawData, setRawData] = useState("");
  const { data: sheetListData, loading } = useQuery(GET_SHEETS);
  const [getSheetMutation] = useMutation(GET_SHEET);
  const [createSheetMutation] = useMutation(CREATE_SHEET, {
    variables: { fileName: rawData.fileName, content: rawData.content },
  });
  const [localLogOutMutation] = useMutation(LOCAL_LOG_OUT);
  const onCreateSheet = async (rawData) => {
    if (rawData !== "") {
      try {
        await createSheetMutation();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onLogOut = async (e) => {
    e.preventDefault();
    try {
      localLogOutMutation();
    } catch (e) {
      console.log(e);
      alert("로그인에 실패하였습니다.");
    }
  };

  const setOldData = async ({ id }) => {
    console.log(id);
    const sheet = await getSheetMutation({ variables: { id: id } });
    setData(convertToJson(sheet.data.getSheet.content));
  };

  useEffect(() => {
    onCreateSheet(rawData);
  }, [rawData]);

  return loading ? (
    <></>
  ) : (
    <RawFileUploadPresenter
      setData={setData}
      sheetList={sheetListData.getSheets}
      setRawData={setRawData}
      onLogOut={onLogOut}
      setOldData={setOldData}
    />
  );
};
