import "../App.css";
import * as React from "react";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

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

class Widget3 extends React.Component {
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
        <div className="simplecard">
        <br />
        <br />
        Nombre d'entrées en millions:{" "}
        {this.state.info.fields.entrees_millions}  
        <ArrowCircleDownIcon/>
        <div> en {this.state.info.fields.annee} </div>
      </div>
    );
  }
}

export default Widget3;

