import React, { Component } from "react";
import { Link } from "react-router-dom";
import partcard from './PartCard.module.css';


function  PartCard(props){
     // constructor(props){
    //     super(props);
    // }
 
    const partUrl = `/partinfo/${props.id}`;
                return(

                        <div className={partcard.card}>
                            <img src={props.img} alt='Part' />
                            <div className={partcard.cardContent}>
                                <p>{props.name}</p>
                                <p>$ {props.price}</p>
                                
                                <Link to={partUrl} className={partcard.lnk}>View Details</Link>
                            </div>
                        </div>
                );
         
}
export default PartCard;