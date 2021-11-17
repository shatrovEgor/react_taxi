import React from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../styles/Taxi.css";
import Car from "./Car"


const Taxi = () => {
    const theme = createTheme({
        palette: {
          neutral: {
            main: '#FDBF5A',
            contrastText: '#000000',
          },
        },
      })


    return (
        <div className="container-taxi-1">
                <Car></Car>
            <ThemeProvider theme={theme}>
                        <Button
                            sx={{ width: '394px', height: '61px', borderRadius: '70px', marginLeft: '45px', marginTop: '20px'}}
                            color='neutral'
                            variant="contained"
                        >go</Button>
                    </ThemeProvider>
        </div>
    )
}

export default Taxi;