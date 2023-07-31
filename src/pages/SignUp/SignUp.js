import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import TextInput from "../../components/TextInput/TextInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const SignUp = () => {
  const { addUser } = useUsers();

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const clearInputs = () => {
    emailRef.current.value = "";
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  const signUpHandler = () => {
    const response = addUser(
      emailRef.current.value,
      usernameRef.current.value,
      passwordRef.current.value,
      confirmPasswordRef.current.value
    );

    if (response === 200) clearInputs();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="mb-5" style={{ color: "#3b5998" }}>
        Sign up for an account
      </h1>
      <TextInput placeholder="Email" passedRef={emailRef} type={"email"} />
      <TextInput placeholder="Username" passedRef={usernameRef} type={"text"} />
      <TextInput
        placeholder="Password"
        passedRef={passwordRef}
        type={"password"}
      />
      <TextInput
        placeholder="Confirm Password"
        type={"password"}
        passedRef={confirmPasswordRef}
      />
      <SubmitButton text={"Sign Up"} onClick={signUpHandler} />

      <p>
        Already have an account? <Link to={"/login"}>Login instead</Link>
      </p>
    </div>
  );
};

export default SignUp;
