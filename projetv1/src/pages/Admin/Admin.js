import "../../App.css";
// reactstrap components
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";

import { Input } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";

import Sidebar from "../../component/Sidebar/Sidebar";
import "./Admin.css";
import { lightGreen } from "@mui/material/colors";

let films = [];

//page admin pour gerer les API
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      description: "",
      date: "",
      popularite: "",
      origine: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let databody = {
      titre: this.state.titre,
      description: this.state.description,
      date: this.state.date,
      popularite: this.state.popularite,
      origine: this.state.origine,
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
                  name="titre"
                  value={this.state.titre}
                  onChange={(e) => this.setState({ titre: e.target.value })}
                ></Input>
              </Grid>
              <Grid item xs={12}>
                <Input
                  className="input"
                  name="description"
                  type="text"
                  value={this.state.description}
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
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
              <Grid item xs={12}>
                <Input
                  className="input"
                  name="popularite"
                  type="text"
                  value={this.state.popularite}
                  onChange={(e) =>
                    this.setState({ popularite: e.target.value })
                  }
                ></Input>
              </Grid>
              <Grid item xs={12}>
                <Input
                  className="input"
                  name="origine"
                  type="text"
                  value={this.state.origine}
                  onChange={(e) => this.setState({ origine: e.target.value })}
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
