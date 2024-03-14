import React,{useState} from "react";
import str from './Store.module.css';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

function Store(){

     const navigate = useNavigate();
    function submit(e){
        e.preventDefault();
        Axios.
            post('http://localhost:3000/store', {
                name: name,
                location: location,
                facebook: facebook,
                email: email
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':localStorage.getItem('token')
                }
            })
            .then((res) => {
                alert('sucess');
                localStorage.setItem('hasStore',"true");
                navigate('/');
            }).catch((error) => {
                alert(error);
            });
    }

    const[name,setName]=useState('');
    const[location,setLocation]=useState('');
    const[facebook,setFacebook]=useState('');
    const[email,setEmail]=useState('');
    if (localStorage.getItem('hasAgency')=="true" || localStorage.getItem('hasStore')=="true" )
         return '403 Forbidden';

    return (
        <form className={str.container} onSubmit={(e)=>submit(e)}>
            <h2 className={str.hdrh2} >Store Section</h2>
            <img className={str.storeImg} src='img\Logo.png' alt='Makina Logo' />

            <label htmlFor='inp1' className={str.la1} >Name :</label>
            <input id='inp1' className={str.inp1} type='text' placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}} />

            <label htmlFor='inp2' className={str.la2}>Location :</label>
            <input id='inp2' className={str.inp2} type='text' placeholder='Enter Location' value={location} onChange ={(e)=>{setLocation(e.target.value)}}/>

            <label htmlFor='inp3' className={str.la3}>Facebook :</label>
            <input id='inp3' className={str.inp3} type='text' placeholder='Enter Facebook Account' value={facebook} onChange={(e)=>{setFacebook(e.target.value)}} />
            <label htmlFor='inp4' className={str.la4}>Email :</label>
            <input id='inp4' className={str.inp4} type='text' placeholder='Enter Email ' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            
            <button type='submit' className={str.bttn}> Submit </button>
        </form>
    )
}

export default Store;