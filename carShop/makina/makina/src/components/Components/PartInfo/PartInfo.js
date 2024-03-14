import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import partInfoEdit from "./PartInfo.module.css";
import { useParams } from 'react-router-dom';

function PartInfo(props) {

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [model_name, setModel] = useState('');
  const [store_name, setStore] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [pho, setPho] = useState('');
  const [store_email, setEmail] = useState('');
  const [store_facebook, setFacebook] = useState('');
  const id = useParams().id;


  useEffect(() => {
    fetch('http://localhost:3000/part/id/' + id)
      .then((res) => {
        if (!res.ok) {
          throw Error('NOT FOUND');
        }
        return res.json();
      }).then((data) => {

        setName(data.data[0].name);
        setYear(data.data[0].year);
        setModel(data.data[0].model_name);
        setStore(data.data[0].store_name);
        setPhoto(data.data[0].photo);
        setPrice(data.data[0].price);
        setEmail(data.data[0].store_email);
        setFacebook(data.data[0].store_facebook);
        setPhone('https://wa.me/+963'+data.data[0].phone);
        setPho(data.data[0].phone);
      })
      .catch((err) => {
        <div className="erroe">{err}</div>
      })
  }, []);
        
  return (
    <div className={partInfoEdit.container}>
      <nav className={partInfoEdit.nav}>
        <img src='\img\Logo.png' alt='Makina' />
        <ul className={partInfoEdit.list1}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cars'>Cars</Link>

          </li>
          <li>
            <Link to='/parts'>Parts</Link>

          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='#contact'>Contact</Link>

          </li>
        </ul>
        <ul className={partInfoEdit.list2}>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>

      <section className={partInfoEdit.partImg}>

        <img src={`http://localhost:3000/${photo}`} alt="1" />

      </section>

      <section className={partInfoEdit.partInfo}>
        <p className={partInfoEdit.price1}>$ {price}</p>
        <a className={partInfoEdit.whatsappButton1} href={phone}>
        <i className="fa-brands fa-whatsapp" style={{fontSize:'20px' , position:'absolute', top:'15px',left:'50px'}}></i><div className={partInfoEdit.wts}>Whatsapp</div> 
           </a>
        <table className={partInfoEdit.carInfoTable1}>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{year}</td>
          </tr>
          <tr>
            <td>Store</td>
            <td>{store_name}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{model_name}</td>
          </tr>
        </table>
      </section>
      <section className={partInfoEdit.description1}>
        <div style={{position:"absolute" ,top:'20px' , left:'80px' , fontSize:'30px' , width:'300px' , color:'#497ECD' , fontStyle:'oblique' , fontWeight:'600' , textShadow:'1px 1px'}}>{store_name}</div>       
        <h5 className={partInfoEdit.companyLoc1}>Syria , Homs</h5>
        <hr className={partInfoEdit.descriptionHr1} />
        <h2 style={{position:'absolute' , top : '130px' , left:'50px' , fontSize:'22px' , fontStyle:'oblique' ,fontWeight:'600'}}>Store Email: {store_email} </h2>
        <h3  style={{position:'absolute' , top:'170px' , left:'50px' , fontSize:'22px' , fontStyle:'oblique' ,fontWeight:'600'}}>Store Facebook : {store_facebook}</h3>
      </section>
      <footer className={partInfoEdit.footer1}>
        <section className={partInfoEdit.firstSection1}>
          <img src='\img\Logo.png' alt='MAKINA' />
          <article>
            The Future of Car Classifieds in MENA. Makina is an Easy, Fast and Free
            car classifieds website for all and it tops it up with exposure across
            all the countries in the MENA region in a matter of seconds.
          </article>
        </section>
        <section className={partInfoEdit.secondSection1}>
          <label className={partInfoEdit.quickLinks1}>Quick Links</label>
          <ul className={partInfoEdit.list3}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cars'>Car Shop</Link></li>
            <li><Link to='/parts' >Car Parts</Link></li>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
        </section>
        <section id='contact' className={partInfoEdit.thirdSection1}>
          <label className={partInfoEdit.contactUs1}>Contact Us</label>
          <div className={partInfoEdit.contactUsList1}>
            <p><i className="fa-solid fa-envelope" style={{
              color: 'gray',
              'fontSize': '20px',
              'paddingRight': '10px'
            }}></i> Makina@gmail.com</p>

            <p><i className="fa-brands fa-whatsapp" style={{
              color: 'green',
              'fontSize': '20px',
              'paddingRight': '10px'
            }}></i> +963554405224</p>

            <p><i className="fa-solid fa-location-dot" style={{
              color: 'brown',
              'fontSize': '20px',
              'paddingRight': '10px'
            }} ></i> Syria , Homs</p>
          </div>
          <button type="button" className={partInfoEdit.sellButton1}>SELL</button>
        </section>
        <hr className={partInfoEdit.endHr1} />
        <p className={partInfoEdit.end1}>Copyright © Makina 2022. All rights reserved.</p>
      </footer>
    </div>
  );

}

export default PartInfo;