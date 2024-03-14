import React, { Component, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import carShopEdit from './CarShop.module.css';
import CarCard from '../CarCard/CarCard'
import  axios  from "axios";

function CarShop() {

    const navigate = useNavigate();
    const [sortType, setSortType] = useState('ASC');
    const [cars, setCarsData] = useState([]);
    // const[cars,setCarsData] = useState([{key:"0" , img:"./img/car1.jpg" , name:"car1" , model:"TOYOTA" , price:"100000000"},
    // {key:"1" , img:"./img/car2.jpg" , name:"car2" , model:"MERCEDES" , price:"150000000"},
    // {key:"2" , img:"./img/car3.jpg" , name:"car3" , model:"KIA" , price:"200000000"},
    // {key:"3" , img:"./img/car4.jpg" , name:"car4" , model:"BMW" , price:"250000000"},
    // {key:"4" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"300000000"},
    // {key:"5" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"300000000"},
    // {key:"6" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"1100000000"},
    // {key:"7" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"500000000"},
    // {key:"8" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"300000000"},
    // {key:"9" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"500000000"},
    // {key:"10" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"400000000"},
    // {key:"11" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"300000000"},
    // {key:"12" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"900000000"},
    // {key:"12" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"300000000"},
    // {key:"12" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"1000000000"},]);
   var loc = useLocation().state;
    useEffect(() => {
        if(!loc){
        fetch('http://localhost:3000/car')
            .then((res) => {
                if (!res.ok) {
                    throw Error('NOT FOUND');
                }
                return res.json();
            })
            .then((data) => {

                setCarsData(data.data)
            })
            .catch((err) => {
                <div className="erroe">{err}</div>
            })
    } else {
        setCarsData(loc)
    } } ,[]) 

    // var data = useLocation();
    // if (data.state) {
    //     setCarsData(data.state)
    // } else {
    //     axios
    //         .get('http://127.0.0.1:3000/car')
    //         .then(res => {
    //             setCarsData(res.data);
    //         }).catch((erroe) => {
    //             alert("somthing went wrong");
    //         })
    // }


    const sorting = (sortType) => {
        if (sortType === 'ASC') {
            const sorted = cars.sort((e1, e2) =>
                e1.price < e2.price ? 1 : -1
            );
            setCarsData(sorted);
            setSortType('DSC');
        }

        if (sortType === 'DSC') {
            const sorted = cars.sort((e1, e2) =>
                e1.price > e2.price ? 1 : -1
            );
            setCarsData(sorted);
            setSortType('ASC');
        }
    }


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


    return (
        <div className={carShopEdit.container}>

            <nav className={carShopEdit.nav}>
                <img src='\img\Logo.png' alt='Makina' />
                <ul className={carShopEdit.list1}>
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
                        <Link to=''>Contact</Link>
                    </li>
                </ul>
                <ul className={carShopEdit.list2}>
                    <li>
                        <Link to='/login'>Log in</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Sign up</Link>
                    </li>
                </ul>
            </nav>
            <button type='button' className={carShopEdit.btn} onClick={() => navigate('/filter')}>
                <span>Filter</span>
                <hr />
                <hr />
                <hr />
            </button>
            
            <div className={carShopEdit.carCrd}>
                {car}

            </div>
            <hr className={carShopEdit.hr} />

            <button type='button' className={carShopEdit.sort1} onClick={() => sorting(sortType)}>
                <hr />
                <hr />
                <hr />
                Sort
            </button>

            <a href="#" className={carShopEdit.gotoTopLink}> <span>Go to Top </span>
                <i className="fa-solid fa-circle-arrow-up" style={{
                    'position': 'absolute',
                    'fontSize': '25px',
                    'color': 'blue',
                    'cursor': 'pointer',
                    'textAlign': 'center'
                }}></i>
            </a>
        </div>
    );

}

export default CarShop;