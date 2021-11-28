import "./Sidebar.css";
import React from "react";
import { Component } from "react";
import Switch from "react-switch";

import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

class Sidebar extends Component {

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }


      handleChange(checked) {
        this.setState({ checked });
      }
    

      render(){
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
                            
                        <label>
        
        <Switch onChange={this.handleChange} checked={this.state.checked} />
        <span>Change theme</span>
      </label>

                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );}
}

export default Sidebar;