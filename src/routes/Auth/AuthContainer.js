/* eslint-disable arrow-body-style */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { SIGN_UP, LOG_IN, LOCAL_LOG_IN } from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const email = useInput("");
  const password = useInput("");
  const passwordCheck = useInput("");
  const [signUpMutation] = useMutation(SIGN_UP, {
    update: (_, { data }) => {
      const { signup } = data;
    },
    variables: { email: email.value, password: password.value },
  });

  const [logInMutation] = useMutation(LOG_IN, {
    update: (_, { data }) => {
      const { login } = data;
    },
    variables: { email: email.value, password: password.value },
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password.value === passwordCheck.value && email.value !== "") {
      try {
        const {
          data: { signup: data },
        } = await signUpMutation();
        if (data.token !== "" && data.token !== undefined) {
          await localLogInMutation({ variables: { token: data.token } });
        }
      } catch (e) {
        console.log(e);
        alert("회원가입에 실패하였습니다.");
      }
    }
  };

  const onLogIn = async (e) => {
    e.preventDefault();
    if (password.value !== "" && email.value !== "") {
      try {
        const {
          data: { login: data },
        } = await logInMutation();
        if (data.token !== "" && data.token !== undefined) {
          await localLogInMutation({ variables: { token: data.token } });
        }
      } catch (e) {
        console.log(e);
        alert("로그인에 실패하였습니다.");
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      email={email}
      password={password}
      passwordCheck={passwordCheck}
      onSignUp={onSignUp}
      onLogIn={onLogIn}
    />
  );
};
