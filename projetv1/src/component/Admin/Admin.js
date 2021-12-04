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
            <Grid container spacing={5} className="firstcard">
              <Grid item xs={12}>
                <center>
                  <h1>Gerer les API</h1>
                </center>
                <Input
                  className="input"
                  type="text"
                  name="tile"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                ></Input>
              </Grid>
              <Grid item xs={12}>
                <Input
                  className="input"
                  name="body"
                  type="text"
                  value={this.state.body}
                  onChange={(e) => this.setState({ body: e.target.value })}
                ></Input>
              </Grid>
              <Grid item xs={12}>
                <Input
                  className="input"
                  name="date"
                  type="text"
                  value={this.state.date}
                  onChange={(e) => this.setState({ date: e.target.value })}
                ></Input>
              </Grid>
              <Grid item xs={4}>
                <Button className="buton" onClick={this.handleClick}>
                  AJOUTER
                </Button>
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
