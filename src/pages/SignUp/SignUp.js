import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { useSnackbar } from "../../hooks/useSnackbar";
import {
  includesSpecialCharacters,
  isLongEnoughString,
  isValidEmail,
} from "../../utilityFunctions/utilityFunctions";

const SignUp = () => {
  const { addUser } = useUsers();

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { popSnackbar } = useSnackbar();

  const clearInputs = () => {
    emailRef.current.value = "";
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        signUpHandler();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const signUpHandler = () => {
    if (emailRef.current.value === "") {
      popSnackbar(
        "Uh oh! We're going to need your email address to proceed",
        "error"
      );
      emailRef.current.focus();
      return;
    } else if (usernameRef.current.value === "") {
      popSnackbar("What do we call you? Let's give you a username", "error");
      usernameRef.current.focus();
      return;
    } else if (passwordRef.current.value === "") {
      popSnackbar(
        "You're going to need a password to secure your account, aren't you?",
        "error"
      );
      passwordRef.current.focus();
      return;
    } else if (confirmPasswordRef.current.value === "") {
      popSnackbar("Can you please confirm the password for us?", "error");
      confirmPasswordRef.current.focus();
      return;
    } else if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      popSnackbar("Make sure the password in both the fields match!", "error");
      return;
    } else if (!isValidEmail(emailRef.current.value)) {
      popSnackbar("Are you sure that's a valid email address?", "error");
      emailRef.current.focus();
      return;
    } else if (!isLongEnoughString(passwordRef.current.value, 8)) {
      popSnackbar(
        "Make sure your password is at least 8 characters long",
        "error"
      );
      passwordRef.current.focus();
      return;
    } else if (!isLongEnoughString(usernameRef.current.value, 5)) {
      popSnackbar(
        "Make sure your username is at least 5 characters long",
        "error"
      );
      usernameRef.current.focus();
      return;
    } else if (includesSpecialCharacters(usernameRef.current.value)) {
      popSnackbar("Username can't contain any special characters", "error");
      usernameRef.current.focus();
      return;
    }

    const response = addUser(
      emailRef.current.value,
      usernameRef.current.value,
      passwordRef.current.value,
      confirmPasswordRef.current.value
    );

    if (response === 200) {
      popSnackbar(
        "A user has been registered against your provided credentials",
        "success"
      );
      clearInputs();
    }
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
