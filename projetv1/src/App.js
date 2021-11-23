import logo from './logo.svg';
import './App.css';


// reactstrap components
import Grid from '@mui/material/Grid';


function App() {
  return (
    <body className='body'>
    <Grid container spacing={1} className='firstcard'>
      <Grid item xs={4}>
        <div className='simplecard' >prix moyen d'une séance</div>
      </Grid>
      <Grid item xs={4}>
        <div className='simplecard'>séance du jour</div>
      </Grid>
      <Grid item xs={4}>
        <div className='simplecard' >Membre</div>
      </Grid>
      <Grid item xs={8}>
        <div className='graphcard'>Nombre de visiteur</div>
      </Grid>
      <Grid item xs={4}>
        <div className='graphcard'>Style</div>
      </Grid>
      <Grid item xs={7}>
        <div className='graphcard'>Genre/Age des visiteurs</div>
      </Grid>
      <Grid item xs={5}>
        <div className='graphcard'>Origine des films</div>
      </Grid>
    </Grid>
    </body>
   
  );
}

export default App;
