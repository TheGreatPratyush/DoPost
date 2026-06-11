import React, { useEffect, useState } from 'react';
import "./NavigationBar.css";
import logo from "../assests/logo.png";

import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const NavigationBar = ({ setIsBooking }) => {

  const [userInitial, setUserInitial] =
    useState("P");

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const user = auth.currentUser;

        if (!user) return;

        const docRef = doc(
          db,
          "users",
          user.uid
        );

        const docSnap =
          await getDoc(docRef);

        if (docSnap.exists()) {

          const name =
            docSnap.data().name;

          setUserInitial(
            name.charAt(0).toUpperCase()
          );

        }

      } catch (error) {

        console.log(error);

      }

    };

    fetchUser();

  }, []);

  return (
    <div className='outer'>

      <div className='doPost'>

        <img
          src={logo}
          alt="DoPost Logo"
          className='navLogo'
        />

        <span>DoPost</span>

      </div>

      <div className='sbox'>

        <div
          className='bookNow'
          onClick={() => setIsBooking(true)}
        >
          + Book Now
        </div>

        <div className='navProfile'>
          {userInitial}
        </div>

      </div>

    </div>
  );
};

export default NavigationBar;