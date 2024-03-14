import React, { Component } from "react";
import styles5 from './Favorites.module.css';
import CarCard from "../CarCard/CarCard";
import PartCard from "../PartCard/PartCard";
import NavBar from "../NavBar/NavBar";

class Favorites extends Component{
    render(){
    return(
        <div className={styles5.container}>
          <NavBar />
          <div className={styles5.page}>
               <header>
                  <p>My Profile</p>
                  <hr/>
               </header>
               <p>Favorites</p>
               <i class="fa-solid fa-chevron-right" style={{
                position: "absolute",
                width: "30px",
                height: "30px",
                left: "150px",
                top: "108px",
                color: "rgba(0, 0, 0, 0.75)",
               }}></i>
               <img src='\img\logo.jpg' alt='logo' className={styles5.myImg}/>
               <h2>Favorites Cars :</h2>

               <div className={styles5.carCard}>
                   <CarCard />
               </div>
               
               <h2>Favorites Parts :</h2>
               <div className={styles5.carPart}>
                   <PartCard />
               </div>
           </div>
        </div>
    )
            }
}


export default Favorites;