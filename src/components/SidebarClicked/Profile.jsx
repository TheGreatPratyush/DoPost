import React, { useEffect, useState } from 'react';
import "./Profile.css";

import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {

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

        const docSnap = await getDoc(docRef);

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

  if (!userData) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="ou">

      <h2>Profile</h2>

      <div className='formDiv'>

        <form>

          <div>
            <label>Full Name</label>

            <input
              type="text"
              value={userData.name || ""}
              readOnly
            />
          </div>

          <div className='pe'>

            <div>
              <label>Phone Number</label>

              <input
                type="text"
                value={userData.phone || ""}
                readOnly
              />
            </div>

            <div>
              <label>Email ID</label>

              <input
                type="email"
                value={userData.email || ""}
                readOnly
              />
            </div>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Profile;