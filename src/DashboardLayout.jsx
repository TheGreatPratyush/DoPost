import React, { useState } from "react";

import NavigationBar from "./components/NavigationBar";
import AssembleSideBar from "./components/sideBar/AssembleSideBar";

import Profile from "./components/SidebarClicked/Profile";
import Order from "./components/SidebarClicked/Order";
import Settings from "./components/SidebarClicked/Settings";
import SavedAddress from "./components/SidebarClicked/Address/Address";
import background from "./assests/background.png";
import "./DashboardLayout.css";

const DashboardLayout = ({ setIsBooking }) => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <>
      <NavigationBar setIsBooking={setIsBooking} />

      <div className="dashboardWrapper">

        <div className="dashboardSidebar">
          <AssembleSideBar setActiveTab={setActiveTab} />
        </div>

        <div className="dashboardContent">

        <div className="dashboardMain">

          {activeTab === "Profile" && <Profile />}
          {activeTab === "My Orders" && <Order />}
          {activeTab === "Saved Address" && <SavedAddress />}
          {activeTab === "Settings" && <Settings />}

        </div>

        <div className="dashboardBackground">
          <img
            src={background}
            alt="city skyline"
          />
        </div>

</div>

      </div>
    </>
  );
};

export default DashboardLayout;