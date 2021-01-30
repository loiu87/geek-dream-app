/* eslint-disable arrow-body-style */
import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  border: 0px;
  color: black;
  font-weight: 300;
  background: white;
  text-align: center;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
`;

const FileButton = ({ text, onClick }) => (
  <Container onClick={onClick}>{text}</Container>
);

export default FileButton;
