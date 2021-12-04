import "../../App.css";
// reactstrap components
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";

import { Input } from "@mui/material";
import { Button } from "@mui/material";

import Sidebar from "../Sidebar/Sidebar";
import "./Admin.css";

//page admin pour gerer les API
class Admin extends React.Component {
  render() {
    return (
      <Box className="body">
        <div className="container">
        
          <Sidebar />

          <Box component="main" sx={{ flexGrow: 1, bgcolor: "#212427", p: 3 }}>
            <Grid container spacing={5} className="firstcard">
            
              <Grid item xs={12}>
              <center><h1>Gerer les API</h1></center>
                <Input className="input"></Input>
              </Grid>
              <Grid item xs={12}>
                <Input className="input"></Input>
              </Grid>
              <Grid item xs={12}>
                <Input className="input"></Input>
              </Grid>
              <Grid item xs={4}>
                <Button className="buton">AJOUTER</Button>
              </Grid>
              <Grid item xs={4}>
                <Button className="buton">SAUVEGARDER</Button>
              </Grid>
              <Grid item xs={4}>
                <Button className="buton">SUPPRIMER</Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    );
  }
}

export default Admin;
