import React, { useState } from "react";
import store from "../store";
import {setRouteTaxi} from '../actions'
import { connect } from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const axios = require('axios').default
    axios.get('https://loft-taxi.glitch.me/addressList')
        .then(function (responce) {
            console.log(responce.data.addresses);
            store.dispatch(setRouteTaxi(responce.data.addresses))
        })
        const mapStateToProps = state => {
                return {
                    routeTax: state.route.adress
                }
        }

        const theme = createTheme({
            palette: {
              neutral: {
                main: '#FDBF5A',
                contrastText: '#00000',
              },
            },
          });
        
const RouteTaxi = ({routeTax}) => {
    const[firstRoute, setFirstRoute] = useState('')
    const[secondRoute, setSecondRoute] =  useState('')
    const handleChange = (event) => {
        setFirstRoute(event.target.value);
      };
      const handleChange2 = (event) => {
        setSecondRoute(event.target.value);
      };


    if(routeTax) {
        return(
            <div>
                <ThemeProvider theme={theme}>
                <div className="route-bar">
                    
                    <Box sx={{ margin: '20px', marginTop: '20px' }}>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={firstRoute}
                            variant='standard'
                            color='neutral'
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>{routeTax[0]}</MenuItem>
                            <MenuItem value={20}>{routeTax[1]}</MenuItem>
                            <MenuItem value={30}>{routeTax[2]}</MenuItem>
                            <MenuItem value={40}>{routeTax[3]}</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    
                </div>
                <div className="route-bar">
                    <Box sx={{ margin: '20px', marginTop: '20px' }}>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-2"
                            value={secondRoute}
                            onChange={handleChange2}
                            variant='standard'
                            color='neutral'
                        >
                            <MenuItem value={10}>{routeTax[0]}</MenuItem>
                            <MenuItem value={20}>{routeTax[1]}</MenuItem>
                            <MenuItem value={30}>{routeTax[2]}</MenuItem>
                            <MenuItem value={40}>{routeTax[3]}</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div>
                </ThemeProvider>
        </div>
        )
    } else {
        return(
            <div>
                <ThemeProvider theme={theme}>
                <div className="route-bar">
                    
                    <Box sx={{ margin: '20px', marginTop: '20px' }}>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            variant='standard'
                            color='neutral'
                        >
                            <MenuItem>1</MenuItem>
                            <MenuItem>2</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    
                </div>
                <div className="route-bar">
                    <Box sx={{ margin: '20px', marginTop: '20px' }}>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-2"
                            variant='standard'
                            color='neutral'
                        >
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div>
                </ThemeProvider>
        </div>
        )
    }
}

export default connect(mapStateToProps)(RouteTaxi);