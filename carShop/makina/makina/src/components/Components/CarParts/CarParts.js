import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import carpartsEdit from './CarParts.module.css';
import PartCard from '../PartCard/PartCard'


function CarParts() {

    const [sortType, setSortType] = useState('ASC');
    const [parts, setPartsData] = useState([]);
    // const [parts,setPartsData]= useState([

    //     {key:"0" , img:"./img/part1.png" , name:"part1" , price:"100000"},
    //     {key:"1" , img:"./img/part2.png" , name:"part2" , price:"150000"},
    //     {key:"2" , img:"./img/part3.png" , name:"part3" , price:"200000"},
    //     {key:"3" , img:"./img/part4.png" , name:"part4" , price:"250000"},
    //     {key:"4" , img:"./img/part5.png" , name:"part5" , price:"300000"},
    //     {key:"5" , img:"./img/part5.png" , name:"part5" , price:"300000"},
    //     {key:"6" , img:"./img/part5.png" , name:"part5" , price:"300000"},
    //     {key:"7" , img:"./img/part5.png" , name:"part5" , price:"300000"},
    //     {key:"8" , img:"./img/part5.png" , name:"part5" , price:"300000"},
    //     {key:"9" , img:"./img/part5.png" , name:"part5" , price:"300000"},

    // ]);

    var loc = useLocation().state;
    useEffect(() => {
        
        if (!loc) {
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
        } else {
            setPartsData(loc)
        }
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



    const sorting = (sortType) => {
        if (sortType === 'ASC') {
            const sorted = parts.sort((e1, e2) =>
                e1.price < e2.price ? 1 : -1
            );
            setPartsData(sorted);
            setSortType('DSC');
        }

        if (sortType === 'DSC') {
            const sorted = parts.sort((e1, e2) =>
                e1.price > e2.price ? 1 : -1
            );
            setPartsData(sorted);
            setSortType('ASC');
        }

    }
    return (
        <div className={carpartsEdit.container}>

            <nav className={carpartsEdit.nav}>
                <img src='\img\Logo.png' alt='Makina' />
                <ul className={carpartsEdit.list1}>
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
                <ul className={carpartsEdit.list2}>
                    <li>
                        <Link to='/login'>Log In</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Sign Up</Link>
                    </li>
                </ul>
            </nav>
            <div className={carpartsEdit.makeBox}>
                <h2>MAKES</h2>
                
                <div className={carpartsEdit.companyLogos}>
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
            </div>
            <p className={carpartsEdit.findLabel}>Find Car Parts That Fits You’r Car Model</p>
            
            <div className={carpartsEdit.partsCrd}>
                {part}
            </div>
            <hr className={carpartsEdit.hr} />

            <button type='button' className={carpartsEdit.sort} onClick={() => sorting(sortType)}>
                <hr />
                <hr />
                <hr />
                sort
            </button>

            <a href="#" className={carpartsEdit.gotoTopLink}> <span>Go to Top </span>
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

export default CarParts;
