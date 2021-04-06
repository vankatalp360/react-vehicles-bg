import { Component } from "react"
import { NavLink } from "react-router-dom";


import "./VehiclesFilter.css"


class VehiclesFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuarry: "",
            filter: ""
        }
    }


    render() {
        return (
            <section className="vehicles-filter">
                <article className="vehicles-filter-buttons">
                    <NavLink className="vehicles-filter-button" to="/?popular">
                        Most Popular
                    </NavLink>
                    <NavLink className="vehicles-filter-button" to="/?recent">
                        Recent
                    </NavLink>
                </article>
                <article className="vehicles-search-form">
                    <form role="search">
                        <label className="vehicles-search-label" htmlFor="search">Search for vehicles</label>
                        <input id="search" className="vehicles-search-bar" type="search" placeholder="Search..." required />
                        <button className="vehicles-search-button" type="submit">Go</button>    
                    </form>
                </article>
            </section>
        )
    }
}

export default VehiclesFilter;

