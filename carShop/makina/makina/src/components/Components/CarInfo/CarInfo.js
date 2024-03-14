import React, { Component, useState , useEffect} from 'react';
import { BrowserRouter, Link , useNavigate, Route , Switch} from "react-router-dom";
import carInfoEdit from "./CarInfo.module.css";
import { useParams } from 'react-router-dom';

function CarInfo  (props) {
    const navigate = useNavigate();
  const [model_name, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [doors, setDoor] = useState('');
  const [color, setColor] = useState('');
  const [transmission, setTransmission] = useState('');
  const [type, setBodyType] = useState('');
  const [make, setmakeType] = useState('');
  const [fuel, setFuel] = useState('');
  const [phone, setPhone] = useState('');
  const [images, setImages] = useState([]);
  const [agency_email,setEmail] = useState('');
  const [agency_facebook,setFacebook] = useState('');
  const [agency_name,setName] = useState('');
  
  const id = useParams().id;
 
  useEffect(()=>{
    fetch('http://localhost:3000/car/id/'+id)
    .then((res)=>{
      if(!res.ok){
        throw Error ('NOT FOUND');
      }
      return res.json();
    })
    .then((data)=>{
     
      setModel(data.data[0].model_name);
      setPrice(data.data[0].price);
      setYear(data.data[0].year);
      setDoor(data.data[0].doors)
      setColor(data.data[0].color);
      setTransmission(data.data[0].transmission);
      setBodyType(data.data[0].type);
      setmakeType(data.data[0].make);
      setFuel(data.data[0].fuel);
       setImages(data.data[0].images);
       setPhone('https://wa.me/+963'+data.data[0].phone);
       setEmail(data.data[0].agency_email);
       setFacebook(data.data[0].agency_facebook);
       setName(data.data[0].agency_name);

    })
    .catch((err)=>{
      <div className="erroe">{err}</div>
    })
   },[]
)
                return (
                <div className={carInfoEdit.container}>
                <nav className={carInfoEdit.nav}>
                <img src='\img\Logo.png' alt='Makina' />
                <ul  className={carInfoEdit.list1}>
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
                <ul  className={carInfoEdit.list2}>
                  <li>
                     <Link to='/login'>Log In</Link>
                  </li>
                  <li>
                     <Link to='/signup'>Sign Up</Link>
                  </li>
                </ul>
            </nav>

                        <section className={carInfoEdit.carImg}>
                          {images.map((image)=>{
                            return (
                              <img src={`http://localhost:3000/${image}`} alt="1"/>
                            )
                          })}
                          
                          
                          
                        </section>

                        <section className={carInfoEdit.carInfo}>
                          <p className={carInfoEdit.price}>$ {price}</p>
                          <a className={carInfoEdit.whatsappButton} href={phone}>
                            <i className="fa-brands fa-whatsapp" style={{fontSize:'20px' , position:'absolute', top:'15px',left:'50px'}}></i><div className={carInfoEdit.wts}>Whatsapp</div> 
                          </a>
                          <table className={carInfoEdit.carInfoTable}>
                            <tr>
                              <td>Year</td>
                              <td>{year}</td>
                            </tr>
                            <tr>
                              <td>Make</td>
                              <td>{make}</td>
                            </tr>
                            <tr>
                              <td>Model</td>
                              <td>{model_name}</td>
                            </tr>
                          
                            <tr>
                              <td>Transmission</td>
                              <td>{transmission}</td>
                            </tr>
                            <tr>
                              <td>Type</td>
                              <td>{type}</td>
                            </tr>
                            <tr>
                              <td>Doors</td>
                              <td>{doors}</td>
                            </tr>
                            <tr>
                              <td>Color</td>
                              <td>{color}</td>
                            </tr>
                            <tr>
                              <td>Fuel</td>
                              <td>{fuel}</td>
                            </tr>
                          </table>
                        </section>
                        <section className={carInfoEdit.description}>
                          <div style={{position:"absolute" ,top:'20px' , left:'80px' , fontSize:'30px' , width:'300px' , color:'#497ECD' , fontStyle:'oblique' , fontWeight:'600' , textShadow:'1px 1px'}}>{agency_name}</div>
                          <h5 className={carInfoEdit.companyLoc}>Syria , Homs</h5>
                          <hr className={carInfoEdit.descriptionHr}/>
                          <h2 style={{position:'absolute' , top : '130px' , left:'50px' , fontSize:'22px' , fontStyle:'oblique' ,fontWeight:'600'}}>Agency Email : {agency_email}</h2>
                          <h3 style={{position:'absolute' , top:'170px' , left:'50px' , fontSize:'22px' , fontStyle:'oblique' ,fontWeight:'600'}}>Agency Facebook : {agency_facebook}</h3>
                          
                        </section>
                        <footer className={carInfoEdit.footer}>
                                <section className={carInfoEdit.firstSection}>
                                <img src='\img\Logo.png' alt='MAKINA'/>
                                <article>
                                  The Future of Car Classifieds in MENA. Makina is an Easy, Fast and Free
                                  car classifieds website for all and it tops it up with exposure across
                                  all the countries in the MENA region in a matter of seconds.
                                </article>
                                </section>
                                <section className={carInfoEdit.secondSection}>
                                <label className={carInfoEdit.quickLinks}>Quick Links</label>
                                <ul className={carInfoEdit.list3}>
                                  <li><a>Home</a></li>
                                  <li><a>Car Shop</a></li>
                                  <li><a>Car Parts</a></li>
                                  <li><a>Log In</a></li>
                                  <li><a>Sign Up</a></li>
                                  <li><a href='#contact'>Contact Us</a></li>
                                </ul>
                                </section>
                                <section id='contact' className={carInfoEdit.thirdSection}>
                                  <label className={carInfoEdit.contactUs}>Contact Us</label>
                                  <div className={carInfoEdit.contactUsList}>
                                    <p><i className="fa-solid fa-envelope" style={{
                                      color:'gray',
                                      'fontSize':'20px',
                                      'paddingRight':'10px'
                                      }}></i> Makina@gmail.com</p>

                                    <p><i className="fa-brands fa-whatsapp" style={{
                                      color:'green',
                                      'fontSize':'20px',
                                      'paddingRight':'10px'
                                      }}></i> +963554405224</p>

                                    <p><i className="fa-solid fa-location-dot" style={{
                                      color:'brown',
                                      'fontSize':'20px',
                                      'paddingRight':'10px'
                                      }} ></i> Syria , Homs</p>
                                  </div>
                                  <button type="button" className={carInfoEdit.sellButton}>SELL</button>
                                </section>
                                <hr className={carInfoEdit.endHr}/>
                                <p className={carInfoEdit.end}>Copyright © Makina 2022. All rights reserved.</p>
                        </footer>
                </div>
              );
          }


export default CarInfo;



// *** WITH Link 
/*
                       

*/

// *** WITH a
/*
                     <nav className={carInfoEdit.nav}>
                            <img src='\img\Logo.png' alt='Makina' />
                            <ul class="list-group list-group-horizontal" className={carInfoEdit.list1}>
                            <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Cars</a>
                          </li>
                          <li>
                            <a href="#">Parts</a>
                          </li>
                          <li>
                            <a href="#">Profile</a>
                          </li>
                          <li>
                            <a href="#contact">Contact</a>
                          </li>
                            </ul>
                            <ul class="list-group list-group-horizontal" className={carInfoEdit.list2}>
                                <li>
                                  <a href="#">Log in</a>
                                </li>
                                <li>
                                  <a href="#">Sign up</a>
                                </li>
                            </ul>
                        </nav>

*/