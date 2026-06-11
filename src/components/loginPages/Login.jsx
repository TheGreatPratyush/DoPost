import React, { useState } from "react";
import "./Auth.css";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setPage }) => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

      setPage("dashboard");

    } catch (error) {

      alert(error.message);

    }
  };

  return (
    <div className="authPage">

      <div className="authLeft">
        <div className="brand">
          <h1>DoPost</h1>

          <p>
            Fast, Reliable & Secure Delivery Services
          </p>
        </div>
      </div>

      <div className="authRight">

        <div className="authCard">

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Login to continue
          </p>

          <form>

            <div className="inputGroup">
              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
              />
            </div>

            <div className="inputGroup">
              <label>Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
              />
            </div>

            <button
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>

          </form>

          <p className="bottomText">
            Don't have an account?

            <span
              onClick={() => setPage("signup")}
            >
              Sign Up
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;