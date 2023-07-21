import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
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
      <div className="w-50 text-center">
        <input
          className="w-75"
          placeholder="Email"
          style={{
            padding: "10px",
            marginBottom: "5px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#f2f2f2",
          }}
        />
      </div>
      <div className="w-50 text-center">
        <input
          className="w-75"
          placeholder="Password"
          style={{
            backgroundColor: "#f2f2f2",
            padding: "10px",
            marginBlock: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        />
      </div>
      <p>
        Don't have an account? <Link to={"/signup"}>Sign up</Link> right here.
      </p>
    </div>
  );
};

export default SignIn;
