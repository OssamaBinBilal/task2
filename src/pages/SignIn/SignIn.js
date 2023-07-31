import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TextInput from "../../components/TextInput/TextInput";
import { useAuth } from "../../hooks/useAuth";

const SignIn = () => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    const response = login(emailRef.current.value, passwordRef.current.value);
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
        Log into your account
      </h1>
      <TextInput placeholder="Email" passedRef={emailRef} type={"email"} />
      <TextInput
        placeholder="Password"
        passedRef={passwordRef}
        type={"password"}
      />
      <SubmitButton text={"Sign In"} onClick={handleLogin} />
      <p>
        Don't have an account? <Link to={"/signup"}>Sign up</Link> right here.
      </p>
    </div>
  );
};

export default SignIn;
