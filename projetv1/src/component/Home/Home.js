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

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

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

class Home extends React.Component {
  state = {
    loading: true,
    info: null,
    info2: null,
  };

  async componentDidMount() {
    const url =
      "https://data.culture.gouv.fr//api/records/1.0/search/?dataset=frequentation-dans-les-salles-de-cinema&q=&facet=annee";
    for (let i = 2015; i < 2021; i++) {
      const response = await fetch(url + "&refine.annee=" + i);
      const data = await response.json();
      this.setState({ info: data.records[0], loading: false });
      annee.push(this.state.info.fields.annee);
      entrees_millions.push(this.state.info.fields.entrees_millions);
    }
    const url2 =
      "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=etablissements-cinematographiques&q=&facet=region_administrative&facet=genre&facet=multiplexe&facet=zone_de_la_commune&refine.region_administrative=";

    for (let i = 0; i <= villes.length; i++) {
      const response = await fetch(url2 + villes[i]);
      const dataBaton = await response.json();
      this.setState({ info2: dataBaton, loading: false });
      cinemas.push(this.state.info2.nhits);
    }
  }

  param() {
    for (let i = 0; i < 6; i++) {
      data.datasets[0].data[i] = entrees_millions[i];
      data.labels[i] = annee[i];
    }
  }
  paramBaton() {
    for (let i = 0; i <= villes.length; i++) {
      dataBaton.datasets[0].data[i] = cinemas[i];
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.info) {
      return <div>ERREUR</div>;
    }
    this.param();
    this.paramBaton();

    return (
      <Box className="body">
        <div className="container">
          <Sidebar />

          <Box component="main" sx={{ flexGrow: 1, bgcolor: "#212427", p: 3 }}>
          <center><h1>Dashboard cinema </h1></center>
            <Grid container spacing={1} className="firstcard">
            
              <Grid item xs={4}>
                <div className="simplecard">
                  <br />
                  <br />
                  Nombre d'entrées en millions:{" "}
                  {this.state.info.fields.entrees_millions}  
                  <ArrowCircleDownIcon/>
                  <div> en {this.state.info.fields.annee} </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="simplecard">
                  <br />
                  <br />
                  Nombre de séances
                  <br />
                  <br />
                  <div>{this.state.info.fields.seances_milliers}
                  <ArrowCircleDownIcon/></div>
                  
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="simplecard">
                  <br />
                  <br />
                  Recette moyenne par personne
                  <br />
                  <br />
                  <div>
                    {this.state.info.fields.recette_moyenne_par_entree_eur} €
                    <ArrowCircleDownIcon/>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="graphcard">
                  Nombre d'entrées
                  <Line className="bar" data={data} />
                  {/* a voir si c'est utile
                <iframe
                  src="https://data.culture.gouv.fr/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJsaW5lIiwiZnVuYyI6IlNVTSIsInlBeGlzIjoiZW50cmVlc19taWxsaW9ucyIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiMwMDAwODAifV0sInhBeGlzIjoiYW5uZWUiLCJtYXhwb2ludHMiOjUwLCJzb3J0IjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJmcmVxdWVudGF0aW9uLWRhbnMtbGVzLXNhbGxlcy1kZS1jaW5lbWEiLCJvcHRpb25zIjp7ImRpc2p1bmN0aXZlLmFubmVlIjp0cnVlfX19XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&static=false&datasetcard=false"
                  width="400"
                  height="300"
                  frameborder="0"
                ></iframe>*/}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="graphcard">
                  Nombre de cinemas actifs
                  <Bar className="bar" data={dataBaton} />
                </div>
              </Grid>
              <Grid item xs={7}>
                <div className="graphcard">Genre/Age des visiteurs</div>
              </Grid>
              <Grid item xs={5}>
                <div className="simplecard">
                  {/*Géolocalisation des cinémas en France
                <iframe
                  src="https://data.culture.gouv.fr/explore/embed/dataset/etablissements-cinematographiques/analyze/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjOGRhMGNiIn1dLCJ4QXhpcyI6InJlZ2lvbl9hZG1pbmlzdHJhdGl2ZSIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6ImV0YWJsaXNzZW1lbnRzLWNpbmVtYXRvZ3JhcGhpcXVlcyIsIm9wdGlvbnMiOnt9fX1dLCJ0aW1lc2NhbGUiOiIiLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D&static=false&datasetcard=false"
                  width="400"
                  height="300"
                  frameborder="0"
                ></iframe>*/}
                  <br />
                  <br />
                  Recette
                  <br />
                  <br />
                  <div>
                    {this.state.info.fields.recette_guichet_meur_courants}{" "}
                    millions d'euros
                    <ArrowCircleDownIcon/>
                  </div>
                </div>
                <br />
                <br />

                <div className="simplecard">
                  {/*Géolocalisation des cinémas en France
                <iframe
                  src="https://data.culture.gouv.fr/explore/embed/dataset/etablissements-cinematographiques/analyze/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjOGRhMGNiIn1dLCJ4QXhpcyI6InJlZ2lvbl9hZG1pbmlzdHJhdGl2ZSIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6ImV0YWJsaXNzZW1lbnRzLWNpbmVtYXRvZ3JhcGhpcXVlcyIsIm9wdGlvbnMiOnt9fX1dLCJ0aW1lc2NhbGUiOiIiLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D&static=false&datasetcard=false"
                  width="400"
                  height="300"
                  frameborder="0"
                ></iframe>*/}
                  <br />
                  <br />
                  Recette
                  <br />
                  <br />
                  <div>
                    {this.state.info.fields.recette_guichet_meur_courants}{" "}
                    millions d'euros
                    <ArrowCircleDownIcon/>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    );
  }
}

export default Home;
