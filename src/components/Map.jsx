import React , {Component} from "react";
import mapboxgl from "mapbox-gl";
import "../styles/Map.css"

export class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlZzEzIiwiYSI6ImNrdzF5bmgxeTFhNGUzMG50aHgxa203M2sifQ.-SW3PFyatqM-YiPIQdduow'

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.3056504, 59.9429126],
            zoom: 10,
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
       return <div className="map-wrapper">
           <div data-testid="map" className="map" ref={this.mapContainer}></div>
       </div>
    }
}

export default Map;