import "../../App.css";
// reactstrap components
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

import Sidebar from "../Sidebar/Sidebar";

const data = {
  labels: [],
  datasets: [
    {
      label: "en millions d'euros",
      data: [],
      borderColor: "white",
    },
  ],
};
const dataBaton = {
  labels: [
    "AUVERGNE/RHONE-ALPES",
    "BOURGOGNE / FRANCHE-COMTE",
    "BRETAGNE",
    "CENTRE-VAL DE LOIRE",
    "CORSE",
    "GRAND EST",
    "HAUTS DE FRANCE",
    "ILE-DE-FRANCE",
    "NORMANDIE",
    "NOUVELLE AQUITAINE",
    "OCCITANIE",
    "PAYS DE LA LOIRE",
    "PROVENCE-ALPES-COTE D AZUR",
  ],
  datasets: [
    {
      label: "par ville",
      data: [],
      backgroundcolor: "white",
    },
  ],
};

let annee = [];
let entrees_millions = [];
let villes = [
  "AUVERGNE+%2F+RHONE-ALPES",
  "BOURGOGNE+%2F+FRANCHE-COMTE",
  "BRETAGNE",
  "CENTRE-VAL+DE+LOIRE",
  "CORSE",
  "GRAND+EST",
  "HAUTS+DE+FRANCE",
  "ILE-DE-FRANCE",
  "NORMANDIE",
  "NOUVELLE+AQUITAINE",
  "OCCITANIE",
  "PAYS+DE+LA+LOIRE",
  "PROVENCE-ALPES-COTE+D%27AZUR",
];
let cinemas = [];

class Search1 extends React.Component {
  render() {
    return (
      <Box className="body">
        <div className="container">
          <Sidebar />

          <Box component="main" sx={{ flexGrow: 1, bgcolor: "#212427", p: 3 }}>
            <Grid container spacing={5} className="firstcard">
              <Grid item xs={12}>
                <Input className="input"></Input>
              </Grid>
              <Grid item xs={12}>
                <Input className="input"></Input>
              </Grid>
              <Grid item xs={12}>
                <Input className="input"></Input>
              </Grid>
              <Grid item xs={4}>
                <Button className="button">AJOUTER</Button>
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

export default Search1;
