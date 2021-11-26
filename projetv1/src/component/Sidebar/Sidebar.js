import "./Sidebar.css";
import React from "react";

import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <DashboardIcon /> Dashboard
                        </li>
                        <li className="sidebarListItem">
                            <SearchIcon /> Search
                        </li>
                        <li className="sidebarListItem">
                            <ToggleOnIcon/> Change theme
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;