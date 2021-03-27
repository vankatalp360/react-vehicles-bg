import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <header className="navigation">
            <section className="navigation-logo-wrapper">
                <Link to="/">
                    <h3>Vehicles.bg</h3>
                </Link>
            </section>
            <section>
                <ul className="navigation-list-items">
                    <li className="navigation-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link to="/vehicles/add">My Profile</Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link to="/vehicles/add">My Vehicles</Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link to="/vehicles/add">Add Vehicle</Link>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header;