import { Component } from "react";
import VehicleCard from "../VehicleCard/VehicleCard"
import * as VehiclesService from "../../Services/Vehicles/VehiclesService"

import "./Vehicles.css";

class Vehicles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        VehiclesService.getAll()
            .then(res => this.setState({ vehicles: res }));
            console.log(this.state.vehicles)
    }

    render() {
        return (
            <section className="vehicles">
                {this.state.vehicles.map(vehicle => 
                    <VehicleCard key={vehicle.id} {...vehicle} />)}
            </section>
        )
    }
}

export default Vehicles;