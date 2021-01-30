/* eslint-disable arrow-body-style */
import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  border: 0px;
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background: ${(props) => props.theme.blueColor};
  text-align: center;
  padding: 10px 0px;
  font-size: 16px;
`;

const AuthButton = ({ text }) => <Container>{text}</Container>;

export default AuthButton;
