import React, { useState, useEffect } from "react";

import DashboardLayout from "./DashboardLayout";
import BookNowLayout from "./BookNowLayout";

import Login from "./components/loginPages/Login";
import Signup from "./components/loginPages/Signup";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {

  const [page, setPage] = useState("login");

  const [isBooking, setIsBooking] = useState(false);

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {

        setUser(currentUser);

        setLoading(false);

      }
    );

    return () => unsubscribe();

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {

    if (page === "signup") {
      return (
        <Signup
          setPage={setPage}
        />
      );
    }

    return (
      <Login
        setPage={setPage}
      />
    );
  }

  return (
    <>
      {isBooking ? (
        <BookNowLayout
          setIsBooking={setIsBooking}
        />
      ) : (
        <DashboardLayout
          setIsBooking={setIsBooking}
        />
      )}
    </>
  );
};

export default App;