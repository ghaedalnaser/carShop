import  Axios  from "axios";
import React, {  useState } from "react";
import editSignUp from "./SignUp.module.css";
import {useNavigate} from "react-router";

function SignUp(){

  const url='http://localhost:3000/user/signin';

  const navigate = useNavigate();
  const[firstName,setFirstName]= useState('');
  const[lastName,setLastName]= useState('');
  const[userName,setUserName]= useState('');
  const[address,setAddress]= useState('');
  const[phoneNumber,setPhoneNumber]= useState('');
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');
  const[securityQuestion,setSecurityQues]= useState('');



  function submit(e){
    e.preventDefault();
    Axios
    .post(url,{
      fname : firstName,
      lname:lastName,
      user_name:userName,
      address:address,
      phone_number:phoneNumber,
      email:email,
      password:password,
      sec_question:securityQuestion
    })
    .then((res)=>{alert('successful')
      navigate('/login')})
    .catch((error)=>{
      //var m =JSON.parse(error);
      var e = document.getElementById('123');
      e.innerHTML='user already exists';
      
  } ); 
  }
  return (
    <form className={editSignUp.container} onSubmit={(e)=>submit(e)}>
            <img src='\img\cosy.png' alt='Car'/>
            <p className={editSignUp.signUpHeader}>Sign Up</p>
            <hr className={editSignUp.signHr} />
            <h5 className={editSignUp.phrase}>
              Fields with <span className={editSignUp.star}>&#42;</span> must filled up .
            </h5>
            <hr className={editSignUp.firstLine}/>
             <div className={editSignUp.addPhoto}>
               
                <p className={editSignUp.addState} id='123'></p>
           
            </div>
            <div className={editSignUp.firstName}>
              <label className={editSignUp.l1}>First Name :</label>
              <input type="text" className={editSignUp.i1} placeholder='Your Name' value={firstName} onChange={e=>setFirstName(e.target.value)} />
            </div>
            <div className={editSignUp.lastName}>
              <label className={editSignUp.l2}>Last Name :</label>
              <input type="text" className={editSignUp.i2} placeholder='Family Name' value={lastName} onChange={e=>setLastName(e.target.value)} />
            </div>
            <div className={editSignUp.userName}>
              <label className={editSignUp.l3}>User Name :</label>
              <input type="text" className={editSignUp.i3} placeholder='NickName' required value={userName} onChange={e=>setUserName(e.target.value)} />
              <span className={editSignUp.userNameStar}>*</span>
            </div>
            <div className={editSignUp.address}>
              <label className={editSignUp.l4}>Address :</label>
              <input type="text" className={editSignUp.i4} placeholder='Country, City, Street, Building Number' value={address} onChange={e=>setAddress(e.target.value)} />
            </div>
            <div className={editSignUp.phoneNumber}>
              <label className={editSignUp.l5}>Phone Number :</label>
              <input type="tel" className={editSignUp.i5} placeholder='09********' maxLength='10' minLength='10' required value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} />
              <span className={editSignUp.phoneNumberStar}>*</span>
            </div>
            <div className={editSignUp.email}>
              <label className={editSignUp.l6}>E-mail :</label>
              <input type="email" className={editSignUp.i6} placeholder='********@gmail.com' required value={email} onChange={e=>setEmail(e.target.value)} />
              <span className={editSignUp.emailStar}>*</span>
            </div>
            <div className={editSignUp.pass}>
              <label className={editSignUp.l7}>Password :</label>
              <input type="password" className={editSignUp.i7} minLength='8' placeholder="At least 8 CHAR" required value={password} onChange={e=>setPassword(e.target.value)} />
              <span className={editSignUp.passwordStar}>*</span>
            </div>
            <div className={editSignUp.secQuestionBox}>
              <h2 className={editSignUp.secQuestion}>Security Question</h2>
              <label className={editSignUp.question}>
                What’s the name of you’r first best friend ?
              </label>
              <br />
              <input type="text" className={editSignUp.answerIn} required value={securityQuestion} onChange={e=>setSecurityQues(e.target.value)} />
              <span className={editSignUp.answerStar}>*</span>
            </div>
            <hr className={editSignUp.hr1} />
            <button type="submit" className={editSignUp.creatAccountButton}>
              Create Account
            </button>
            <hr className={editSignUp.hr2} />
    </form>
  );
}


export default SignUp;

