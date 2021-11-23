import React from "react";
import Map from "../components/Map"
import Header from "../components/Header"
import Taxi from "../components/Taxi"
import RouteTaxi from "../components/RouteTaxi"

const MapPage = () => {
    return(
        <div className="container_2">
            <Header/>
            <Map></Map>
            <div className="container-taxi">
                <RouteTaxi/>
                <Taxi></Taxi>
            </div>
        </div>
    )
}

export default MapPage;