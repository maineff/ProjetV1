import "../../App.css";
import * as React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      label: "en millions d'euros",
      data: [],
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
      fill: "blue",
      stroke: "blue",
    },
  ],
};
const dataCercle = {
  labels: [],
  datasets: [
    {
      label: "par nom de cinéma nombre de film programmé",
      data: [],
      backgroundColor: [
        "#6C0AEE",
        "#8246D1",
        "#AB81E3",
        "#AB98C4",
        "#D2C0EA",
        "#6F3DB2",
        "#75569F",
        "#AA99C2",
        "#BC9BEA",
      ],
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
let cinemaNom = [
  "BALZAC",
  "GAUMONT PARNASSE",
  "MK2 BEAUBOURG",
  "MK2 PARNASSE",
  "L'ARCHIPEL",
  "MAJESTIC PASSY",
  "MK2 GAMBETTA",
  "MK2 BASTILLE COTE FAUBOURG SAINT-ANTOINE",
  "MAJESTIC BASTILLE",
  "UGC LYON BASTILLE",
];
let noms = [];
let nombre_de_film_programme = [];

class Chart3 extends React.Component {
  state = {
    loading: true,
    info: null,
    info2: null,
    info3: null,
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
    const url3 =
      "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=etablissements-cinematographiques&q=&facet=region_administrative&facet=genre&facet=multiplexe&facet=zone_de_la_commune";
    for (let i = 0; i < cinemaNom.length; i++) {
      const response = await fetch(url3);
      const dataCercle = await response.json();
      this.setState({ info3: dataCercle.records[i], loading: false });
      noms.push(this.state.info3.fields.nom);
      nombre_de_film_programme.push(
        this.state.info3.fields.nombre_de_films_programmes
      );
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
  paramCercle() {
    for (let i = 0; i < noms.length; i++) {
      dataCercle.datasets[0].data[i] = nombre_de_film_programme[i];
      dataCercle.labels[i] = noms[i];
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
    this.paramCercle();

    return (
      <div className="graphcard2">
        Cinema en France
        <Pie className="bar" data={dataCercle} />
      </div>
    );
  }
}

export default Chart3;
