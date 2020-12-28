import React, { Component } from 'react';
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class LastMap extends Component {
    render() {
        return (
            <div>

                <Map
                    style={{ height: "35vw", width: "100%" , }}
                    zoom={1}
                    center={[41.32739, 69.283499]}
                >
                    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <CircleMarker
                        center={[41.32739, 69.283499]}
                    />
                </Map>

            </div>
        );
    }
}

export default LastMap;



