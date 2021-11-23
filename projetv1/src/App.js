import logo from './logo.svg';
import './App.css';


// reactstrap components
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div className='card'>xs=8</div>
      </Grid>
      <Grid item xs={4}>
        <div className='card'>xs=4</div>
      </Grid>
      <Grid item xs={4}>
        <div className='card'>xs=4</div>
      </Grid>
      <Grid item xs={8}>
        <div className='card'>xs=8</div>
      </Grid>
    </Grid>
   
  );
}

export default App;
