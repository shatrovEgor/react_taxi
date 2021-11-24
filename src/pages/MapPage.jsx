import React from "react";
import Map from "../components/Map"
import Header from "../components/Header"
import Taxi from "../components/Taxi"
import RouteTaxi from "../components/RouteTaxi"
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        indicate: state.dataCard.indicateCard
    }
}

const MapPage = ({indicate}) => {
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
            <div className="container-taxi-nocard">
                <button>click</button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(MapPage);