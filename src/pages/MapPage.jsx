import React from "react";
import Map from "../components/Map"
import Header from "../components/Header"
import Taxi from "../components/Taxi"
import RouteTaxi from "../components/RouteTaxi"
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';

const mapStateToProps = state => {
    return {
        indicate: state.dataCard.indicateCard
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


const MapPage = ({indicate}) => {
    let navigate = useNavigate();

    const handleChangeClick = () => {
        navigate('/profile')
    }

    return(
        <div className="container_2">
            <Header/>
            <Map></Map>
            <div className="container-taxi-nocard">
                <button>click</button>
            </div>
            <div className={indicate ? 'container-taxi' : 'unactive'}>
                <RouteTaxi/>
                <Taxi></Taxi>
            </div>
            <div className={indicate ? 'unactive' : "container-taxi-nocard"}>
            <h1>Укажите данные карты</h1>
                <ThemeProvider theme={theme}>
                    <Button
                        onClick={handleChangeClick}
                        type="submit"
                        sx={{ width: '353px', height: '61px', borderRadius: '70px', margin: '0 auto'}}
                        color='neutral'
                        variant="contained"
                    >перейти в профиль</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(MapPage);