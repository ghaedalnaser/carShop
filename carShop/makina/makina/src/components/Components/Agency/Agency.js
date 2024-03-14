import React, { useState } from 'react';
import egency from './Agency.module.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Egency() {

     const navigate = useNavigate();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [facebook, setFacebook] = useState('');
    const [email, setEmail] = useState('');
    function submit(e) {
        e.preventDefault();
        Axios.
            post('http://localhost:3000/agency', {
                name: name,
                location: location,
                facebook: facebook,
                email: email
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then((res) => {
                alert('sucess');
                localStorage.setItem('hasAgency',"true");
                navigate('/');
            }).catch((error) => {
                alert(error);
            });
    }

    if (localStorage.getItem('hasAgency')=="true" || localStorage.getItem('hasStore')=="true" ){
        return '403 Forbidden';


    }
    return (
        <form className={egency.container} onSubmit={(e) => submit(e)}>
            <h2 className={egency.hdr}>Agency  Section</h2>
            <img className={egency.logoImg} src='img\Logo.png' alt='Makina Logo' />

            <label htmlFor='in1' className={egency.lab1}> Name :</label>
            <input id='in1' className={egency.in1} type='text' placeholder='Enter Name' value={name} onChange={(e) => { setName(e.target.value) }} required />

            <label htmlFor='in2' className={egency.lab2} > Location :</label>
            <input className={egency.in2} type='text' placeholder='Enter Location' value={location} onChange={(e) => { setLocation(e.target.value) }} required />

            <label htmlFor='in3' className={egency.lab3} > Facebook :</label>
            <input className={egency.in3} type='text' placeholder='Enter Facebook Account' value={facebook} onChange={(e) => { setFacebook(e.target.value) }} required />

            <label htmlFor='in4' className={egency.lab4} >Email :</label>
            <input className={egency.in4} type='text' placeholder='Enter email ' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
            <button type='submit' className={egency.sub} > Submit </button>
        </form>
    )
}

export default Egency;