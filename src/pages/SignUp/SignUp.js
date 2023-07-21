import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          placeholder="Username"
          style={{
            backgroundColor: "#f2f2f2",
            padding: "10px",
            marginBlock: "10px",
            borderRadius: "5px",
            border: "none",
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
      <div className="w-50 text-center">
        <input
          className="w-75"
          placeholder="Confirm Password"
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
        Already have an account? <Link to={"/login"}>Login instead</Link>
      </p>
    </div>
  );
};

export default SignUp;
