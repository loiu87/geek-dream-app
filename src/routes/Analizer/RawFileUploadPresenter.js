/* eslint-disable arrow-body-style */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import FileButton from "../../components/FileButton";
import { readExcel } from "./util/readExcel";

export default ({ setData, sheetList, setRawData, onLogOut, setOldData }) => {
  return (
    <Wrapper>
      <UploaderWrapper>
        <Uploader>
          <h1>분석파일 업로드</h1>
          <input
            type="file"
            id="excelFile"
            onChange={(event) => {
              return readExcel(event, setData, setRawData);
            }}
          />
        </Uploader>
      </UploaderWrapper>

      <h1>파일 로그</h1>
      {sheetList.map((sheet) => {
        return (
          <FileButton
            key={sheet.id}
            text={`${sheet.fileName}`}
            onClick={() => setOldData({ id: sheet.id })}
          />
        );
      })}

      <Form>
        <form onSubmit={onLogOut}>
          <AuthButton text={"로그아웃"} />
        </form>{" "}
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const UploaderWrapper = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Uploader = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => {
    return props.theme.whiteBox;
  }}
  max-width: 350px;
  width: 100%;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  border-width: 0px;
  form {
    widht: 100%;
    button {
      margin-top: 10px;
    }
  }
`;
