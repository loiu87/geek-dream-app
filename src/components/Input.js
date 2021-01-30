/* eslint-disable arrow-body-style */
import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0px;
  border: ${(props) => props.theme.boxBorder}
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.bgColor};
  height: 35px;
  padding: 0px 15px;
  font-size: 16px;
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
}) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
  />
);

export default Input;
