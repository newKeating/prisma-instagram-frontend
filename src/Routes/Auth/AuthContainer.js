import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQuries";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const password = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const onLogin = e => {
    e.preventDefault();
    if (email !== "") {
      requestSecret();
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      password={password}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
    />
  );
};
