import React, { useContext, useState } from "react";
import {useNavigate } from "react-router";
import editLogin from "./LogIn.module.css";
import Axios from 'axios';

import{AuthContext} from '../AuthContext';

function Login(){

  const url ='http://localhost:3000/user/login';
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const[email,setEmail]= useState('');
  const[password,setPassword]=useState('');

  function submit(e){
    e.preventDefault();
  
    Axios
    .post(url,{
      email:email,
      password:password,
  
    })
    .then((res)=>{//alert('successful')
      if(res.data.token)
      {
       localStorage.setItem('token',res.data.token);
       localStorage.setItem('user_name',res.data.name);
       localStorage.setItem('hasStore',res.data.hasStore);
       localStorage.setItem('hasAgency',res.data.hasAgency);
       
       localStorage.setItem('id',res.data.id);
       navigate('/');
      }
      else{
        throw Error ("invalid token");
      }
      
  })
    .catch((error)=>{
      //var m =JSON.parse(error);
      var e = document.getElementById('123');
      e.innerHTML='user not found';
      
    })
     
    
  }

  return (
    <div>
        <img
        alt='CarPhoto'
        src='\img\about.png' //`url/${}`
        style={{ position:'absolute' , width: '500px',height: '250px',left: '80px',top: '240px'}}
        />

        <form className={editLogin.container} onSubmit={e=>submit(e)}>
          <p className={editLogin.loginHeader}>Log in</p>
          <div id="123"></div>
          <hr className={editLogin.firstHr} />
          <input
            type="email"
            className={editLogin.input1}
            placeholder="E-mail , Phone , UserName"
            required
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <br />
          <input
            id="pass"
            type="password"
            className={editLogin.input2}
            placeholder="Password"
            required
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <br />
          <button
             type="submit"
             className={editLogin.button}
          >
            Log in
          </button>

          <hr className={editLogin.hr1} />
          <p className={editLogin.createAccount}>Or Create Account</p>
          <hr className={editLogin.hr2} />

          <button type="button" className={editLogin.createAccountButton} onClick={()=>navigate('/signup')}>
            Create New Account
          </button>
          <h5 className={editLogin.link}>
            forgot you’r password ?
            <span className={editLogin.resetPass}> Reset Password </span>
          </h5>
        </form>
    </div>
);
}

export default Login;
