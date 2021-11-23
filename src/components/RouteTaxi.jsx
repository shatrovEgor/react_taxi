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
                routeTax: state.route
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

    const [firstRoute, setFirstRoute] = React.useState(routeTax);
    const [secondRoute, setSecondRoute] = useState(routeTax)

    const handleChange = (event) => {
        setFirstRoute(event.target.value);
      };

    const handleChange2 = (event) => {
        setSecondRoute(event.target.value);
    };

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
                        onChange={handleChange}
                        variant='standard'
                        color='neutral'
                    >
                        {routeTax.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            >
                            {name}
                        </MenuItem>
                        ))}
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
                        {routeTax.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </Box>
            </div>
            </ThemeProvider>
    </div>
    )
}

export default connect(mapStateToProps)(RouteTaxi);