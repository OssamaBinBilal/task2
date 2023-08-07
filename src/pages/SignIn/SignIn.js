import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { useSnackbar } from "../../hooks/useSnackbar";

const SignIn = () => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { popSnackbar } = useSnackbar();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleLogin();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleLogin = () => {
    if (passwordRef.current.value === "" && emailRef.current.value === "") {
      popSnackbar("Please fill in the required credentials.", "error");
      emailRef.current.focus();
      return;
    } else if (passwordRef.current.value === "") {
      popSnackbar("Please provide a password.", "error");
      passwordRef.current.focus();
      return;
    } else if (emailRef.current.value === "") {
      popSnackbar("Please provide an email.", "error");
      emailRef.current.focus();
      return;
    }
    const response = login(emailRef.current.value, passwordRef.current.value);
    if (response === 401) popSnackbar("Invalid login credentials.", "error");
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
