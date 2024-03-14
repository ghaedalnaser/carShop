import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import styles1 from './EditProfile.module.css';

class EditProfile extends Component{
    render(){
    return(
        <div className={styles1.container}>
            <NavBar />
            <div className={styles1.page}>
               <header>
                  <p>My Profile</p>
                  <hr/>
               </header>
               <p>Edit Profile</p>
               <i class="fa-solid fa-chevron-right" style={{
                position: "absolute",
                width: "30px",
                height: "30px",
                left: "150px",
                top: "108px",
                color: "rgba(0, 0, 0, 0.75)",
               }}></i>
            
               <img src='\img\logo.jpg'  alt='logo' className={styles1.myImg} />
               <form>

                  <div className={styles1.firstName}>
                      <label>First name :</label>
                      <input type={"text"} placeholder={"Abdullah"}/>
                  </div>

                  <div className={styles1.lastName}>
                      <label>last name :</label>
                      <input type="text" placeholder="Mohammad"/>
                  </div>

                  <div className={styles1.userNameIn} >
                      <label>User name :</label>
                      <input type={"text"} placeholder={"Maher Ghaed"} required/>
                  </div>

                  <div className={styles1.address}>
                      <label>Address :</label>
                      <input type={"text"} placeholder={"Syria , Homs"}/>
                  </div>

                  <div className={styles1.phoneNum} >
                      <label>Phone Number :</label>
                      <input type={"tel"} placeholder={"0900000000"} required/>
                  </div>

                  <div className={styles1.email}>
                      <label>E-mail :</label>
                      <input type={"email"} placeholder={"Michel@gmail.com"} required/>
                  </div>

                  <button type="submit">Save</button>

               </form>
        </div>
     </div>
        
    );
            }
}


export default EditProfile;
