import React, { useEffect, useState } from 'react';
import "./Setting.css";

import { auth, db } from "../../firebase";

import { signOut } from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";

const Settings = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {

    const fetchUserData = async () => {

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

          setUserData(
            docSnap.data()
          );

        }

      } catch (error) {

        console.log(error);

      }

    };

    fetchUserData();

  }, []);

  const handleLogout = async () => {

    try {

      await signOut(auth);

      alert(
        "Logged Out Successfully"
      );

    } catch (error) {

      alert(error.message);

    }

  };

  if (!userData) {

    return <h2>Loading...</h2>;

  }

  return (
    <div className='accountSetting'>

      <div className='bor'>
        <h2>Account Settings</h2>
      </div>

      <div className='settingsProfileSection'>

        <div className='settingsLogo'>
          {userData.name
            ?.charAt(0)
            .toUpperCase()}
        </div>

      </div>

      <div className='settingsInfo'>

        <h3 className='userName'>
          Hi! {userData.name}
        </h3>

        <p className='userPhone'>
          {userData.phone}
        </p>

      </div>

      <div className='bor log'>

        <div className='delete'>
          Delete Account
        </div>

        <div
          className='logout'
          onClick={handleLogout}
        >
          Logout
        </div>

      </div>

    </div>
  );
};

export default Settings;