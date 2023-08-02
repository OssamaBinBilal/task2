import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

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
      <Input
        placeholder="Email"
        ref={emailRef}
        type={"email"}
        classes="w-50 mb-2"
      />
      <Input
        placeholder="Password"
        ref={passwordRef}
        type={"password"}
        classes="w-50 mb-2"
      />
      <Button text="Sign In" onClick={handleLogin} classes="w-50 my-3" />
      <p>
        Don't have an account? <Link to={"/signup"}>Sign up</Link> right here.
      </p>
    </div>
  );
};

export default SignIn;
