/* eslint-disable arrow-body-style */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import Input from "../../components/Input";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  max-width: 350px;
  width: 100%;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    widht: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
  border: 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;
export default ({
  action,
  setAction,
  email,
  password,
  passwordCheck,
  onSignUp,
  onLogIn,
}) => {
  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form onSubmit={onLogIn}>
            <Input placeholder={"이메일"} {...email} />
            <Input placeholder={"비밀번호"} {...password} type="password" />
            <AuthButton text={"로그인"} />
          </form>
        ) : (
          <form onSubmit={onSignUp}>
            <Input placeholder={"이메일"} {...email} />
            <Input placeholder={"비밀번호"} {...password} type="password" />
            <Input
              placeholder={"비밀번호 확인"}
              {...passwordCheck}
              type="password"
            />
            <AuthButton text={"회원가입"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            계정이 없으신가요?{" "}
            <Link onClick={() => setAction("signUp")}>회원가입</Link>
          </>
        ) : (
          <>
            이미 계정이 있나요?{" "}
            <Link onClick={() => setAction("logIn")}>로그인</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
