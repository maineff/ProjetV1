import logo from './logo.svg';
import './App.css';


// reactstrap components
import Grid from '@mui/material/Grid';


function App() {
  return (
    
    <Grid container spacing={2} className='firstcard'>
      <Grid >
        <div className='card' item xs={4}>prix moyen d'une séance</div>
      </Grid>
      <Grid >
        <div className='card' item xs={4}>séance du jour</div>
      </Grid>
      <Grid>
        <div className='card' item xs={4}>Membre</div>
      </Grid>
      <Grid>
        <div className='card' item xs={12}>xs=8</div>
      </Grid>
    </Grid>
   
  );
}

export default App;
