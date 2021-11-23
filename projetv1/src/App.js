import './App.css';
import API_FREQUENTATION from "./API_Frequentation";
// reactstrap components
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 50;

function start() {
  const apiFrequentation = new API_FREQUENTATION();
  apiFrequentation
  .fetch()
  .then(function (response) {
    const data = response.data;
    alert(data[0]);

      // On récupère l'information principal
      const annee = data.frequentation[0].annee;

      // Modifier le DOM
      document.getElementById('annee').innerHTML = annee;
  })
  .catch(function(error) {
    // Affiche une erreur
    console.error(error);
    alert(error)
  });
  
}

function App() {
  start();
  return (
  
    <Box className='body'> 

      <Drawer sx={{width: drawerWidth,}}
        variant="permanent"
        anchor="left"
      >
        <List className="drawer" >
          {['OUI', 'NN'].map((text, index) => (
            <ListItem button key={text}><ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box 
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#212427', p: 3 }}
      > 
        <Grid container spacing={1} className='firstcard'>
          <Grid item xs={4}>
            <div className='simplecard' >prix moyen d'une séance
          
            
            </div>
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
      </Box> 
    </Box> 
   
  );
}

export default App;
