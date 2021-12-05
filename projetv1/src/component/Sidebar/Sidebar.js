import "./Sidebar.css";
import React from "react";
import { Component } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MovieIcon from '@mui/icons-material/Movie';
import { NavLink } from "react-router-dom";

class Sidebar extends Component {

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(checked) {
        this.setState({ checked });
    }


    render() {
        return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebartitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <NavLink exact to="/"> 
                                    <DashboardIcon/> Dashboard
                                </NavLink>
                            </li>
                            <li className="sidebarListItem">
                                <NavLink exact to="search">
                                    <SupervisorAccountIcon /> Admin
                                </NavLink>

                            </li>
                            <li className="sidebarListItem">
                                <NavLink exact to="film">
                                    <MovieIcon /> Film
                                </NavLink>

                            </li>


                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;