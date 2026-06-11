import React, { useState } from "react";
import "./Auth.css";

import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = ({ setPage }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        phone,
        createdAt: new Date()
      });

      alert("Account Created Successfully");

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
          <p>Create your account and start shipping with DoPost.</p>
        </div>
      </div>

      <div className="authRight">

        <div className="authCard">

          <h2>Create Account</h2>

          <p className="subtitle">
            Join DoPost today
          </p>

          <form>

            <div className="inputGroup">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div className="inputGroup">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="inputGroup">
              <label>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
              />
            </div>

            <div className="inputGroup">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
              />
            </div>

            <button
              type="button"
              onClick={handleSignup}
            >
              Create Account
            </button>

          </form>

          <p className="bottomText">
            Already have an account?
            <span onClick={() => setPage("login")}>
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;