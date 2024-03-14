import React, { Component } from "react";
import styles3 from "./BeSeller.module.css";
import NavBar from "../NavBar/NavBar";
class BeSeller extends Component{
   render(){
    return(
        <div className={styles3.container}>
        <NavBar />
          <div className={styles3.page}>
               <header>
                  <p>My Profile</p>
                  <hr/>
               </header>
               <p>Become A Seller</p>
               <i class="fa-solid fa-chevron-right" style={{
                position: "absolute",
                left: "165px",
                top: "108px",
                color: "rgba(0, 0, 0, 0.75)",
               }}></i>
            
               <img src='\img\logo.jpg'  alt="myImg" className={styles3.myImg}/>
               <i class="fa-solid fa-pen-to-square" style={{
                  position :'absolute',
                  top: '295px',
                  left: '695px',
                  fontSize:'27px',
                  color : 'blue',
                  cursor :'pointer',
                  zIndex : '1'
               }}></i>
               <h2>Want’s to join our family and become a seller ?</h2>
               <form>

                  <div className={styles3.estateOffice}>
                     <label>Name Of Real Estate Office : </label>
                     <input type={"text"} placeholder="Eagles" required></input>
                  </div>

                  <div className={styles3.commercialRec}>
                     <label>Commercial Record :</label>
                     <input type={"text"} placeholder="00113456793" required></input>
                  </div>
        
                  <button type="submit">Become A Seller</button>

               </form>
            </div>
     </div>
    );
            }
}


export default BeSeller;