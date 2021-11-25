import "./Sidebar.css";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


const drawerWidth = 50;

const Sidebar = () => {
    return (

        <Drawer sx={{ width: drawerWidth }} variant="permanent" anchor="left">
            <List className="drawer">
                {["HOME", "SEARCH"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;