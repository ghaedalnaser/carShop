import React, { Component } from "react"
import nav from './NavBar.module.css'

class NavBar extends Component {
    render(){
    return(
            <div className={nav.navigation}>
                    <div className={nav.userName}>
                                <i class="fa-regular fa-circle-user"  style={{
                                position: "absolute",
                                width: "25%",
                                height: "40px",
                                left: "0px",
                                top: "18px",
                                fontSize:"30px",
                            
                                color:"white"}}>
                                </i>
                                <h3>User Name</h3>
                        </div>
                        <div className={nav.editProfile}>
                            <i class="fa-solid fa-pencil"  style={{
                                position: "absolute",
                                width: "25%",
                                height: "40px",
                                left: "0px",
                                top: "18px",
                                fontSize:"30px",
                                
                                color:"wheat"}}></i>
                                <h3>Edit Profile</h3>
                        </div>
                        <div className={nav.security}>
                            <i class="fa-solid fa-lock" style={{
                                position: "absolute",
                                width: "25%",
                                height: "40px",
                                left: "0px",
                                top: "18px",
                                fontSize:"30px",
                                
                                color:"wheat"}}></i>
                                <h3>Security & Password</h3>
                        </div>
                        <div className={nav.beSeller}>
                                <i class="fa-solid fa-address-card" style={{
                                position: "absolute",
                                width: "25%",
                                height: "40px",
                                left: "0px",
                                top: "18px",
                                fontSize:"30px",
                                
                                color:"wheat"}}></i>
                                <h3>Become A Seller</h3>
                        </div>
                        <div className={nav.favorites}>
                                <i class="fa-solid fa-heart" style={{
                                position: "absolute",
                                width: "25%",
                                height: "40px",
                                left: "0px",
                                top: "18px",
                                fontSize:"30px",
                                
                                color:"wheat"}}></i>
                                <h3>Favorites</h3>
                        </div>
                            <div className={nav.postCar}>
                                <i class="fa-solid fa-file-circle-plus" style={{
                                position: "absolute",
                                width: "25%",
                                height: "40px",
                                left: "0px",
                                top: "18px",
                                fontSize:"30px",
                                
                                color:"wheat"}}></i>
                                <h3>Post A Car Or Part</h3>
                            </div>
                        <div className={nav.logOut}>
                                <i class="fa-solid fa-right-from-bracket"style={{
                                position: "absolute",
                                width: "25%",
                                height: "40px",
                                left: "0px",
                                top: "18px",
                                fontSize:"30px",
                                
                                color:"wheat"}}></i>
                                <h3>Log Out</h3>
                        </div>
                    </div>
    );
                                }
}
export default NavBar;