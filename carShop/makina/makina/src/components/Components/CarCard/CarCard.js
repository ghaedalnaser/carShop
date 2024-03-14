import React from "react";
import CarCardEdit from './CarCard.module.css';
import { Link } from "react-router-dom";

function CarCard(props) {
    const carUrl = `/carinfo/${props.id}`;
    return (

        <div className={CarCardEdit.crd} key={props.id}>
            <img className={CarCardEdit.carImg} src={props.img} alt="car" />
            <div className={CarCardEdit.cardContent}>
                <h5> {props.name}</h5>
                <p> {props.model}</p>
                <p> $ {props.price} </p>
                <Link to={carUrl} className={CarCardEdit.lin} >View Details</Link>
            </div>

        </div>
    )


}
export default CarCard;

