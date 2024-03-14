import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import styles2 from './Security.module.css';

class Security extends Component{
   render(){
    return(
        <div className={styles2.container}>

            <NavBar />
            <div className={styles2.page}>
               <header>
                  <p>My Profile</p>
                  <hr/>
               </header>
               <p>Security & Password</p>
               <i class="fa-solid fa-chevron-right" style={{
                position: "absolute",
                width: "30px",
                height: "30px",
                left: "185px",
                top: "108px",
                color: "rgba(0, 0, 0, 0.75)",
               }}></i>
            
               <img src='\img\logo.jpg' alt='logo' className={styles2.myImg} />
               <form>

                  <div className={styles2.newPass}>
                     <label>New Passowrd :</label>
                     <input type="password" ></input>
                  </div>

                  <div className={styles2.confirmPass}>
                     <label>Confirm Password :</label>
                     <input type={"password"}></input>
                  </div>

                  <div className={styles2.sequrityQues}>
                     <h1>Security Question</h1>
                     <label>What’s the name of you’r first best friend ?</label>
                     <input type={"text"}placeholder={"Ahmad"}></input>
                  </div>

                  <button type="submit">Save</button>

               </form>
               
            </div>
        </div>
    );
            }
}
export default Security;