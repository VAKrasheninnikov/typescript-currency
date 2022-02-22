import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={{ justifyContent: "flex-end" }}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{display:"flex", alignItems:"center"}}>
                <TextField style={{ padding: '5px' }} fullWidth={true} />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                  <Select
                    label="Валюта"
                  >
                    <MenuItem value={10}>USD</MenuItem>
                    <MenuItem value={20}>EUR</MenuItem>
                    <MenuItem value={30}>GBP</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{display:"flex", alignItems:"center"}}>
                <TextField style={{ padding: '5px' }} fullWidth={true} />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                  <Select
                    label="Валюта"
                  >
                    <MenuItem value={10}>USD</MenuItem>
                    <MenuItem value={20}>EUR</MenuItem>
                    <MenuItem value={30}>GBP</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <Typography style={{marginTop:"20px"}} variant="h5" gutterBottom component="div">75,36 Российский рубль</Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
