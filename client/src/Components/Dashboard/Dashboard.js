import { Fragment } from "react"

import Header from "../Header/Header"
import VehiclesFilter from "../VehiclesFilter/VehiclesFilter"
import Vehicles from "../Vehicles/Vehicles"

const Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <VehiclesFilter />
            <Vehicles />
        </Fragment>
    );
}

export default Dashboard;