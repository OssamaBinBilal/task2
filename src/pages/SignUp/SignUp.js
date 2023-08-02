import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

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
      <Input
        placeholder="Email"
        ref={emailRef}
        classes="w-50 mb-2"
        type={"email"}
      />
      <Input
        placeholder="Username"
        ref={usernameRef}
        classes="w-50 mb-2"
        type={"text"}
      />
      <Input
        placeholder="Password"
        ref={passwordRef}
        classes="w-50 mb-2"
        type={"password"}
      />
      <Input
        placeholder="Confirm Password"
        ref={confirmPasswordRef}
        classes="w-50 mb-2"
        type={"password"}
      />
      <Button text="Sign Up" onClick={signUpHandler} classes="w-50 my-2" />

      <p>
        Already have an account? <Link to={"/login"}>Login instead</Link>
      </p>
    </div>
  );
};

export default SignUp;
