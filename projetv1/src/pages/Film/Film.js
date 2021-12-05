import "../../App.css";
import "../Film/Film.css";
import Sidebar from "../../component/Sidebar/Sidebar";

// reactstrap components
import Grid from "@mui/material/Grid";
import * as React from "react";
import Box from "@mui/material/Box";
import axios from "axios";



let films = [];
let filmActuel = [];

//page admin pour gerer les API
class Film extends React.Component {

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
            <Box className="body">
                <div className="container">
                    <Sidebar />

                    <Box component="main" sx={{ flexGrow: 1, bgcolor: "#212427", p: 3 }}>
                        <center><h1>Dashboard cinema </h1></center>
                        <Grid container spacing={1} className="firstcard">

                            <Grid item xs={12}>
                                <div className="card">
                                    <br />
                                    Film plus populaire
                                    <br /> <br />
                                    <div>{filmActuel && filmActuel.length != 0 && filmActuel.titre}</div>
                                </div>
                            </Grid>
                            
                        </Grid>
                    </Box>
                </div>
            </Box>
        );
    }
}


export default Film;

