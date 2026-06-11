import React from 'react'
import "./AssembleSideBar.css"
import SideBar from './SideBar.jsx'

const AssembleSideBar = ({ setActiveTab }) => {

    const menuItems = [
        { name: "Profile", logo: "👤" },
        { name: "My Orders", logo: "📦" },
        { name: "Saved Address", logo: "📍" },
        { name: "Help", logo: "❓" },
        { name: "Settings", logo: "⚙️" }
    ];

    return (
        <div className='assembleSidebar'>
            <ul className='sidebarList'>
                {menuItems.map((item, idx) => (
                    <li
                        key={idx}
                        className='sidebarItem'
                        onClick={() => setActiveTab(item.name)}
                    >
                        <SideBar
                            name={item.name}
                            logo={item.logo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssembleSideBar;