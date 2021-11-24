import "./App.css";
// reactstrap components
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Component } from "react";

const drawerWidth = 50;

class App extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url =
      "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=frequentation-dans-les-salles-de-cinema&q=&facet=annee";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.records[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <Box className="body">
        <Drawer sx={{ width: drawerWidth }} variant="permanent" anchor="left">
          <List className="drawer">
            {["OUI", "NN"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#212427", p: 3 }}>
          <Grid container spacing={1} className="firstcard">
            <Grid item xs={4}>
              <div className="simplecard">
                prix moyen d'une séance :
                <div>{this.state.person.fields.entrees_millions}</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="simplecard">séance du jour</div>
            </Grid>
            <Grid item xs={4}>
              <div className="simplecard">Membre</div>
            </Grid>
            <Grid item xs={8}>
              <div className="graphcard">Nombre de visiteur</div>
            </Grid>
            <Grid item xs={4}>
              <div className="graphcard">Style</div>
            </Grid>
            <Grid item xs={7}>
              <div className="graphcard">Genre/Age des visiteurs</div>
            </Grid>
            <Grid item xs={5}>
              <div className="graphcard">Origine des films</div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default App;
