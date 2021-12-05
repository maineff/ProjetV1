import "../../App.css";
// reactstrap components
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";

import { Input } from "@mui/material";
import { Button } from "@mui/material";

import Sidebar from "../../component/Sidebar/Sidebar";


//page admin pour gerer les API
class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", date: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let databody = {
      title: this.state.title,
      body: this.state.body,
      date: this.state.date,
    };

    console.log(JSON.stringify(databody));

    fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(databody),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(databody, "databody");
  }

  render() {
    return (
        <Box className="body">
        <div className="container">
          <Sidebar />

          <Box component="main" sx={{ flexGrow: 1, bgcolor: "#212427", p: 3 }}>
          <center><h1>Dashboard cinema </h1></center>
            <Grid container spacing={1} className="firstcard">
            
              <Grid item xs={4}>

            

              </Grid>
              <Grid item xs={4}>

              
              </Grid>
              <Grid item xs={4}>

               

              </Grid>
              <Grid item xs={6}>
                
               
                
              </Grid>
              <Grid item xs={6}>
                
             

              </Grid>
              <Grid item xs={7}>

           
                
              </Grid>
              <Grid item xs={5}>
               
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    );
  }
}

export default Film;

