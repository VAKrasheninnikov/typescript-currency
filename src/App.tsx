import React from 'react';
import axios from 'axios';
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: number;
  }

  const [array, setArray] = React.useState<TCoin[]>([]);
  React.useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data: { Data } })=>{
      setArray(Data)
    })
  }, [])
  console.log(array)

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={{ justifyContent: "flex-end" }}>
        <Grid item xs={8}>
          <Item style={{ backgroundColor: "#CCCCCC" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Full Name</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Volume 24 hour</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {array.map((el) => (
                    <TableRow
                      key={el.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {el.CoinInfo.FullName}
                      </TableCell>
                      <TableCell align="right">{el.name}</TableCell>
                      <TableCell align="right">{el.name}</TableCell>
                      <TableCell align="right">{el.name}</TableCell>
                      <TableCell align="right">{el.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
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
              <div style={{ display: "flex", alignItems: "center" }}>
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
            <Typography style={{ marginTop: "20px" }} variant="h5" gutterBottom component="div">75,36 Российский рубль</Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
