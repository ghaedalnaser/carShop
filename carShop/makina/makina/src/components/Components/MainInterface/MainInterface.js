import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'

import mainEdit from './MainInterface.module.css'
import PartCard from '../PartCard/PartCard'
import CarCard from '../CarCard/CarCard'

import { AuthProvider, AuthContext } from '../AuthContext';


function MainInterface() {
    const url = '';

    const navigate = useNavigate();

    const [model, setModel] = useState('');
    const [company, setCompany] = useState('');

    const [budget, setBudget] = useState(0);
    const [search, setSearch] = useState('');

    const [cars, setCars] = useState([]);

    //     {key:"0" , img:"./img/car1.jpg" , name:"car10" , model:"TOYOTA" , price:"100000000"},
    //     {key:"1" , img:"./img/car2.jpg" , name:"car2" , model:"MERCEDES" , price:"150000000"},
    //     {key:"2" , img:"./img/car3.jpg" , name:"car19" , model:"KIA" , price:"200000000"},
    //     {key:"3" , img:"./img/car4.jpg" , name:"car4" , model:"BMW" , price:"250000000"},
    //     {key:"4" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"300000000"},
    //     {key:"5" , img:"./img/car5.jpg" , name:"car1" , model:"JEEP" , price:"300000000"},
    //     {key:"6" , img:"./img/car5.jpg" , name:"car8" , model:"JEEP" , price:"300000000"},
    //     {key:"7" , img:"./img/car5.jpg" , name:"car6" , model:"JEEP" , price:"300000000"},
    //     {key:"8" , img:"./img/car5.jpg" , name:"car11" , model:"JEEP" , price:"300000000"},
    //     {key:"9" , img:"./img/car5.jpg" , name:"car7" , model:"JEEP" , price:"300000000"},

    // ]);

    function logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_name');
        localStorage.removeItem('hasAgency');
        localStorage.removeItem('hasStore');
    }

    function submitBudget(e) {
        e.preventDefault();
        Axios
            .post('http://127.0.0.1:3000/car/filter',
                {
                    name: -1,
                    priceFrom: -1,
                    priceTo: budget,
                    yearFrom: -1,
                    yearTo: -1,
                    doors: -1,
                    color: -1,
                    gear: -1,
                    type: -1,
                })
            .then(res => {
                navigate('/cars', { state: res.data.data });
            }).catch((error) => {
                alert("somthing went wrong");
            })
    }
    function submitPart(e) {
        e.preventDefault();
        Axios
            .get(`http://127.0.0.1:3000/part/name/${company}`)
            .then(res => {
                navigate('/parts', { state: res.data.data });
            }).catch((error) => {
                alert("somthing went wrong");
            })
    }
    useEffect(() => {
        fetch('http://localhost:3000/car')
            .then((res) => {
                if (!res.ok) {
                    throw Error('NOT FOUND');
                }
                return res.json();
            })
            .then((data) => {
                // const data = data.slice(start,end);
                setCars(data.data)
            })
            .catch((err) => {
                <div className="erroe">{err}</div>
            })
    }, []
    )



    const car = Array.from(cars).map(function (member) {
        return (
            <CarCard

                id={member.id}
                img={`http://localhost:3000/${member.images[0]}`}
                name={`${member.make} ${member.model_name}`}
                model={member.agency_name}
                price={member.price}
            />
        )
    });

    const [parts, setPartsData] = useState([]);

    //     {key:"0" , img:"./img/part1.png" , model:'2000', name:"part1" , price:"100000"},
    //     {key:"1" , img:"./img/part2.png" , model:'2001', name:"part2" , price:"150000"},
    //     {key:"2" , img:"./img/part3.png" , model:'2002', name:"part3" , price:"200000"},
    //     {key:"3" , img:"./img/part4.png" , model:'2001', name:"part4" , price:"250000"},
    //     {key:"4" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
    //     {key:"5" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
    //     {key:"6" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
    //     {key:"7" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
    //     {key:"8" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
    //     {key:"9" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
    // ])

    useEffect(() => {
        fetch('http://localhost:3000/part')
            .then((res) => {
                if (!res.ok) {
                    throw Error('NOT FOUND');
                }
                return res.json();
            })
            .then((data) => {
                setPartsData(data.data);
            })
            .catch((err) => {
                <div className="erroe">{err}</div>
            })
    }, []
    )


    const part = Array.from(parts).map(function (member) {
        return (
            <PartCard
                id={member.id}
                img={'http://localhost:3000/' + member.photo}
                name={member.name}
                price={member.price}
            />
        )
    });

    return (
        <div className={mainEdit.container}>
            {!localStorage.getItem('token') ?
                <nav id='home' className={mainEdit.nav}>
                    <img src='\img\Logo.png' alt='Makina Logo' />
                    <ul class="list-group list-group-horizontal" className={mainEdit.list1}>
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
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal" className={mainEdit.list2}>
                        <li>
                            <Link to='/login'>Log In</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                    </ul>
                </nav>
                : <nav id='home' className={mainEdit.nav}>
                    <img src='\img\Logo.png' alt='Makina Logo' />
                    <ul class="list-group list-group-horizontal" className={mainEdit.list1}>
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
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                    <ul class="list-group list-group-horizontal" className={mainEdit.list2}>
                        <li className={mainEdit.userli}>
                            {localStorage.getItem('user_name')}
                        </li>
                        <li>
                            <Link to='/' onClick={logOut}>logOut</Link>
                        </li>
                    </ul>
                </nav>
            }
            <div className={mainEdit.headerSection}>
                <div className={mainEdit.hdrImg}>
                </div>
                <img src='\img\cosy.png' alt='Car' />
                <div className={mainEdit.title}>
                    <section>
                        We Have Everything
                        Your Car Need
                    </section>
                    <section>
                        We Provide An Online Platform For Selling
                        Cars And It’s Parts .
                    </section>
                </div>
                <div className={mainEdit.filterSection}>
                    <button type='button' className={mainEdit.btn} onClick={() => navigate('/filter')}>
                        <span>Filter</span>
                        <hr />
                        <hr />
                        <hr />
                    </button>
                </div>
            </div>

            <div className={mainEdit.carSection}>
                <h1>Great Cars For Evrey Budget</h1>
                <div className={mainEdit.searchBar}>
                    <form>
                        <input type='text' placeholder='You’r Car Budget' value={budget} onChange={e => setBudget(e.target.value)} />
                        <button type='submit' className={mainEdit.searchBarBtn} onClick={(e) => submitBudget(e)}>Surprise Me</button>
                    </form>
                </div>
                <h2>BODY TYPE</h2>
                <div className={mainEdit.bodyTypeHolder}>
                    <div>
                        <img src='\img\sedan.svg' alt='SEDAN' />
                        <label>SEDAN</label>
                    </div>

                    <div>
                        <img src='\img\coupe.svg' alt='COUPE' />
                        <label>COUPE</label>
                    </div>

                    <div>
                        <img src='\img\hatch.svg' alt='HATCH' />
                        <label>HATCH</label>
                    </div>

                    <div>
                        <img src='\img\suv.svg' alt='SUV' />
                        <label>SUV</label>
                    </div>

                    <div>
                        <img src='\img\wagon.svg' alt='WAGON' />
                        <label>WAGON</label>
                    </div>

                    <div>
                        <img src='\img\pickup.svg' alt='PICKUP' />
                        <label>PICKUP</label>
                    </div>
                </div>

                <h2>MAKES</h2>
                <div className={mainEdit.makesHolder}>

                    <div>
                        <img src='\img\Kia.png' alt='kia' />
                        <label>KIA</label>
                    </div>

                    <div>
                        <img src='\img\Toyota.png' alt='toyota' />
                        <label>TOYOTA</label>
                    </div>

                    <div>
                        <img src='\img\Chery.png' alt='chery' />
                        <label>CHERY</label>
                    </div>

                    <div>
                        <img src='\img\Chevrolet.png' alt='cheverolet' />
                        <label>CHEVEROLET</label>
                    </div>


                    <div>
                        <img src='\img\BMW.png' alt='bmw' />
                        <label>BMW</label>
                    </div>

                    <div>
                        <img src='\img\Hyundai.png' alt='hyundai' />
                        <label>HYUNDAI</label>
                    </div>

                    <div>
                        <img src='\img\Lexus.png' alt='lexus' />
                        <label>LEXUS</label>
                    </div>

                    <div>
                        <img src='\img\Nissan.png' alt='nissan' />
                        <label>NISSAN</label>
                    </div>

                    <div>
                        <img src='\img\Mercedes-Benz.png' alt='mercedes' />
                        <label>MERCEDES-BENZ</label>
                    </div>

                </div>

                <h2>LATEST CARS</h2>
                <div className={mainEdit.latestCar}>
                    {car}
                </div>
                <button type='button' className={mainEdit.viewAllBtn} onClick={() => navigate('/cars')}>View All</button>
            </div>

            <div className={mainEdit.beSellerSection}>
                <img src='\img\about.png' />
                <section>
                    <p>
                        Want To Become A Seller ?
                    </p>

                    <p>You can benifit from our website to show you’r cars , parts
                        And everything that a car customer will need .
                    </p>

                    <button type='button' onClick={() => navigate('/signup')} >Join Now</button>
                </section>
            </div>

            <div className={mainEdit.partsSection}>

                <div className={mainEdit.description}>
                    <p>What We Offer</p>
                    <p>Our Car Is Always Excellent</p>
                    <p>Find You’r Car Parts In One Destination</p>
                </div>

                <div className={mainEdit.partscards}>
                    {part}
                </div>

                <div className={mainEdit.searchPart}>

                    <section>

                        <article>

                            <h1>
                                Car Parts
                            </h1>
                            <p>
                                Are you looking for A spesific car Part ?
                                fill Information below
                            </p>

                        </article>

                        <form onSubmit={(e) => submitPart(e)}>

                            <div>
                              
                                    <label>Part Name :</label>
                                    <input className={mainEdit.npt}type="text" placeholder="Part Name" value={company} onChange={e => setCompany(e.target.value)} />
                               
                            </div>


                            <hr />
                            <button type="submit">View All</button>
                            <hr />

                        </form>

                    </section>

                    <section>

                        <h1>Kinds Of Car Parts</h1>
                        <hr />
                        <ul>
                            <li>
                                Tyers : <br />
                                We provide tyers from the best
                                Companies in the world for you’r car .
                            </li>
                            <li>
                                Engiens : <br />
                                We provide engiens from the best
                                Companies in the world for you’r car .
                            </li>
                            <li>
                                Kits : <br />
                                We provide kits from the best
                                Companies in the world for you’r car .
                            </li>
                            <li>
                                Accesores : <br />
                                We provide accesores from the best
                                Companies in the world for you’r car .
                            </li>
                        </ul>

                    </section>
                </div>

            </div>

            <footer className={mainEdit.footer}>
                <section className={mainEdit.firstSection}>
                    <img src='\img\Logo.png' alt='MAKINA' />
                    <article>
                        The Future of Car Classifieds in MENA. Makina is an Easy, Fast and Free
                        car classifieds website for all and it tops it up with exposure across
                        all the countries in the MENA region in a matter of seconds.
                    </article>
                </section>
                <section className={mainEdit.secondSection}>
                    <label className={mainEdit.quickLinks}>Quick Links</label>
                    {!localStorage.getItem('token') ?
                        <ul className={mainEdit.list3}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/cars'>Car Shop</Link></li>
                            <li><Link to='/parts'>Car Parts</Link></li>

                            <li><Link to='/login'>Log In</Link></li>
                            <li><Link to='/signup'>Sign Up</Link></li>
                        </ul> :
                        <ul className={mainEdit.list3}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/cars'>Car Shop</Link></li>
                            <li><Link to='/parts'>Car Parts</Link></li>
                            {(localStorage.getItem('hasStore') != "true" && localStorage.getItem('hasAgency') != "true") ?
                                <li><Link to='/store'>Add Personal Store</Link></li>
                                :
                                ''
                            }
                            {(localStorage.getItem('hasStore') != "true" && localStorage.getItem('hasAgency') != "true") ?
                                <li><Link to='/agency'>Add Personal Agency</Link></li>
                                :
                                ''
                            }
                        </ul>
                    }
                </section>
                <section className={mainEdit.thirdSection} id='contact'>
                    <label className={mainEdit.contactUs}>Contact Us</label>
                    <div className={mainEdit.contactUsList}>
                        <p><a>
                            <i class="fa-solid fa-envelope" style={{
                                color: 'gray',
                                'fontSize': '20px',
                                'paddingRight': '10px'

                            }}></i>
                            Makina@gmail.com
                        </a>
                        </p>

                        <p><a>
                            <i class="fa-brands fa-whatsapp" style={{
                                color: 'green',
                                'fontSize': '20px',
                                'paddingRight': '10px'
                            }}></i>
                            +963554405224
                        </a>
                        </p>

                        <p><a>
                            <i class="fa-solid fa-location-dot" style={{
                                color: 'brown',
                                'fontSize': '20px',
                                'paddingRight': '10px'
                            }} ></i>
                            Syria , Homs
                        </a>
                        </p>
                    </div>

                </section>
                <hr className={mainEdit.endHr} />
                <p className={mainEdit.end}>Copyright © Makina 2022. All rights reserved.</p>
            </footer>

        </div>

    );

}

export default MainInterface;