import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img1 from './img1.png';

import "./App.css";

function App() {
  return (
    <Grid container sx={{backgroundColor: 'pink', height:'100vh', pl:3}}  component='main'>
      <Grid xs={12} component='section' sx={{
          backgroundColor: '#282C4B',
          height:'40vh'
        }}>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <img src={img1} alt=""/>
          <Box>
          <p style={{color: '#F17216'}}>WHY CHOOSE US</p>
          <p style={{color: '#fff'}}>Take on any Challenge of the Digital World</p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;