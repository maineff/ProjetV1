import "../../App.css";
// reactstrap components
import * as React from "react";
import axios from "axios";


let films = [];
let filmActuel = [];

class Widget6 extends React.Component {

  fetch = async () => {
    try {
      const { data: film } = await axios.get("http://localhost:5000");
      films = film;

      filmActuel = films.find((unFilm) => unFilm.popularite === "99");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    
    this.fetch();

    return (
      <div className="card">
        <br />
        Film plus populaire
        <br /> <br />
        <div>{filmActuel && filmActuel.length != 0 && filmActuel.titre}</div>
        <div>{filmActuel && filmActuel.length != 0 && filmActuel.description}</div>
        <div>{filmActuel && filmActuel.length != 0 && filmActuel.date}</div>
        <div>{filmActuel && filmActuel.length != 0 && filmActuel.popularite}</div>
        <div>{filmActuel && filmActuel.length != 0 && filmActuel.origine}</div>
      </div>
    );
  }
}

export default Widget6;
