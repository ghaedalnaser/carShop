import React, { useEffect } from 'react'
import prf from './Profile.module.css'
import { useState } from 'react';
export default function Profile() {

    const [user_name, setUserName] = useState('');
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [address, setAddress] = useState();
    const [phone_number, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const id = localStorage.getItem('id');

    useEffect(() => {
        fetch(`http://localhost:3000/user/id/${id}`)
            .then((res) => {
               return res.json();
            })
            .then((data) => {
                setUserName(data.data[0].user_name);
                setAddress(data.data[0].address);
                setFname(data.data[0].fname);
                setLname(data.data[0].lname);
                setPhoneNumber(data.data[0].phone_number);
                setEmail(data.data[0].email);
            }).catch((error) => {
                // alert(JSON.stringify(error))
            })
     },[])


    return (
        <div className={prf.contain}>
            <img src='\img\logo.png' alt='Logo' style={{position:'absolute', top:'0px' , left:'350px' , width:'170px'}}/>
            <div style={{position:'absolute' , top: '70px' , left:'30px' , width:'250px' , textDecoration:'underline 3px blue' , fontSize:'25px'}}> Your Information : </div>
            <div> User Name  : <div style={{position:'absolute'  , width:'200px',top:'0px', left:'170px' , fontSize:'20px'}}>{user_name}</div></div>
            <div> Full Name : <div style={{position:'absolute' , width:'200px' ,top:'0px', left:'170px' , fontSize:'20px'}}>{fname} {' '} {lname}</div> </div>
            <div> Address : <div style={{position:'absolute' , width:'200px' ,top:'0px', left:'170px' , fontSize:'20px'}}>{address}</div></div>
            <div> Phone Number : <div style={{position:'absolute'  , width:'200px' ,top:'0px', left:'170px' , fontSize:'20px'}}>{phone_number}</div></div>
            <div> Email : <div style={{position:'absolute'  , width:'200px' ,top:'0px', left:'170px' , fontSize:'20px'}}>{email}</div></div>

        </div>
    )

}