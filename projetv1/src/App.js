import "./App.css";
// reactstrap components
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

import Sidebar from "./component/Sidebar/Sidebar";



const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "en millions d'euros",
      data: [43, 19, 3, 5, 2, 3],
    },
  ],
};

class App extends React.Component {
  state = {
    loading: true,
    info: null,
  };

  async componentDidMount() {
    const url =
      "https://data.culture.gouv.fr//api/records/1.0/search/?dataset=frequentation-dans-les-salles-de-cinema&q=&facet=annee&refine.annee=2020";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ info: data.records[0], loading: false });
  }
  param() {
    data.datasets[0].data[0] = this.state.info.fields.entrees_millions;
    data.labels[0] = this.state.info.fields.annee;
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.info) {
      return <div>ERREUR</div>;
    }
    this.param();

    return (
      <Box className="body">

        <div className="container" >
        <Sidebar/> 

        


        

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#212427", p: 3 }}>
          <Grid container spacing={1} className="firstcard">
            <Grid item xs={4}>
              <div className="simplecard"><br/><br/>
                Nombre d'entrées en millions: {this.state.info.fields.entrees_millions}
                <div> en {this.state.info.fields.annee} </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="simplecard">
                <br/><br/>
                Nombre de séances<br/><br/>
                <div>{this.state.info.fields.seances_milliers}</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="simplecard">
              <br/><br/>
                Recette moyenne par personne<br/><br/>
                <div>
                  {this.state.info.fields.recette_moyenne_par_entree_eur} euros
                </div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className="graphcard">
                Nombre d'entrées
                {/* a voir si c'est utile
                <iframe
                  src="https://data.culture.gouv.fr/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJsaW5lIiwiZnVuYyI6IlNVTSIsInlBeGlzIjoiZW50cmVlc19taWxsaW9ucyIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiMwMDAwODAifV0sInhBeGlzIjoiYW5uZWUiLCJtYXhwb2ludHMiOjUwLCJzb3J0IjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJmcmVxdWVudGF0aW9uLWRhbnMtbGVzLXNhbGxlcy1kZS1jaW5lbWEiLCJvcHRpb25zIjp7ImRpc2p1bmN0aXZlLmFubmVlIjp0cnVlfX19XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&static=false&datasetcard=false"
                  width="400"
                  height="300"
                  frameborder="0"
                ></iframe>*/}
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="graphcard">
                Recette
                <Bar className="bar" data={data}  />
                <div>
                  {this.state.info.fields.recette_guichet_meur_courants}{" "}
                  millions d'euros
                </div>
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className="graphcard">Genre/Age des visiteurs</div>
            </Grid>
            <Grid item xs={5}>
              <div className="graphcard">
                {/*Géolocalisation des cinémas en France
                <iframe
                  src="https://data.culture.gouv.fr/explore/embed/dataset/etablissements-cinematographiques/analyze/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjOGRhMGNiIn1dLCJ4QXhpcyI6InJlZ2lvbl9hZG1pbmlzdHJhdGl2ZSIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6ImV0YWJsaXNzZW1lbnRzLWNpbmVtYXRvZ3JhcGhpcXVlcyIsIm9wdGlvbnMiOnt9fX1dLCJ0aW1lc2NhbGUiOiIiLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D&static=false&datasetcard=false"
                  width="400"
                  height="300"
                  frameborder="0"
                ></iframe>*/}
              </div>
            </Grid>
          </Grid>
        </Box>
        </div>
      </Box>
    );
  }
}

export default App;
