import { Link } from "react-router-dom";
import "./VehicleCard.css"

const VehicleCard = ({
    id,
    brand,
    model,
    year,
    description,
    price,
    images
}) => {
    return (
        <article className="vehicle-card">
            <article className="vehicle-card-img-wrapper">
                <img src={images[0]}/>
            </article>
            <article className="vehicle-card-content">
                <article className="vehicle-card-content-section-details">
                    <p className="vehicle-card-brand">{brand}</p>
                    <p className="vehicle-card-model">{model} ({year})</p>
                    <p className="vehicle-card-description">{description.substring(0, 45) + "..."}</p>
                </article>
                <hr />
                <article className="vehicle-card-content-section-price">
                    <p className="vehicle-card-price">Price: {price}</p>
                    <Link className="vahicles-card-details-button" to={`/vehicles/details/${id}`}>Details</Link>
                </article>
            </article>
        </article>
    );
}

export default VehicleCard;