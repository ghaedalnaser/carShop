import React, { useState } from 'react'
import editfilter from "./Filter.module.css";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Filter() {

   const navigate=useNavigate();
  const [model, setModel] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');
  const [doorNum, setDoorNum] = useState('');

  const [carColor, setCarColor] = useState('');

  const [gear, setGear] = useState('');
  const [bodyType, setBodyType] = useState('');


  const clearSearch = () => {


  }

  function submit(e) {
    e.preventDefault();
    Axios
      .post('http://127.0.0.1:3000/car/filter',
        {
          name: model?model:-1,
          priceFrom: minPrice?minPrice:-1,
          priceTo: maxPrice?maxPrice:-1,
          yearFrom: yearFrom?yearFrom:-1,
          yearTo: yearTo?yearTo:-1,
          doors: doorNum?doorNum:-1,
          color: carColor?carColor:-1,
          gear: gear?gear:-1,
          type: bodyType?bodyType:-1,
        })
      .then(res => {
          navigate('/cars',{state:res.data.data});   
      }).catch((error)=>{
        alert("somthing went wrong");
      })
  }



const toggleDoor = (value) => {
  setDoorNum(value);
}

const toggleColor = (value) => {
  setCarColor(value)
}

const toggleGear = (value) => {
  setGear(value)
}

const toggleBodyType = (value) => {
  setBodyType(value)
}




return (
  <form className={editfilter.container} onSubmit={(e) => submit(e)}>
    <h2 className={editfilter.header1}>YOU ARE SEARCHING</h2>
    <h2 onClick={() => clearSearch} className={editfilter.header2}>Clear Search</h2>
    <i onClick={() => clearSearch} class="fa-solid fa-trash" style={{
      'position': 'absolute',
      'color': 'blue',
      'top': '49px',
      'left': '490px',
      'cursor': 'pointer'
    }}></i>
    <hr className={editfilter.hr1} />

    <div className={editfilter.modelBox}>
      <label className={editfilter.model}>Make/Model :</label>

      <input className={editfilter.modelInput} placeholder="Add Make And Model" value={model} onChange={(e) => { setModel( e.target.value ) }} />
    </div>

    <div className={editfilter.yearBox}>
      <label className={editfilter.year}>Year :</label>

      <input className={editfilter.fromIn} placeholder="From" value={yearFrom} onChange={(e) => { setYearFrom(e.target.value ) }} />
      <input className={editfilter.toIn} placeholder="To" value={yearTo} onChange={(e) => { setYearTo( e.target.value ) }} />
    </div>

    <div className={editfilter.bodyTypeBox} >
      <label className={editfilter.bodyType} >Body Type :</label>
      <ul type="none" className={editfilter.bodyTypeList} >
        <li>
          <button type='button' onClick={() => toggleBodyType('coupe')} ><img src='\img\coupe.svg' alt='COUPE' />COUPE</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleBodyType('sedan')} > <img src='\img\sedan.svg' alt='SEDAN' />SEDAN</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleBodyType('hatch')} ><img src='\img\hatch.svg' alt='HATCH' />HATCH</button>
        </li>
      </ul>
      <ul type="none" className={editfilter.bodyTypeList2} >
        <li>
          <button type='button' onClick={() => toggleBodyType('suv')} ><img src='\img\suv.svg' alt='SUV' />SUV</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleBodyType('wagon')}> <img src='\img\wagon.svg' alt='WAGON' />WAGON</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleBodyType('pickup')} > <img src='\img\pickup.svg' alt='PICKUP' /> <span>PICKUP</span></button>
        </li>
      </ul>
    </div>

    <div className={editfilter.priceBox}>
      <label className={editfilter.price}>Price :</label>

      <input className={editfilter.minPrice} placeholder="Min" value={minPrice} onChange={(e) => { setMinPrice( e.target.value ) }} />
      <input className={editfilter.maxPrice} placeholder="Max" value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value ) }} />
    </div>

    <div className={editfilter.gearBox}>
      <label className={editfilter.gear}>Gear Box :</label>
      <ul type="none" className={editfilter.gearList}>
        <li>
          <button type='button' onClick={() => toggleGear('auto')}>Automatic</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleGear('Manual')} >Manual</button>
        </li>
      </ul>
    </div>

    <div className={editfilter.doorsBox}>
      <label className={editfilter.doors}>Doors :</label>
      <ul type="none" className={editfilter.doorsList}>
        <li>
          <button type='button' onClick={() => toggleDoor('2')}>2</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleDoor('3')}>3</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleDoor('4')}>4</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleDoor('5')}>5</button>
        </li>
      </ul>
    </div>

    <div className={editfilter.colorsBox}>
      <label className={editfilter.colors}>Colors :</label>
      <ul type="none" className={editfilter.colorsList} >
        <li>
          <button type='button' onClick={() => toggleColor('beige')}>beige</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('black')}>black</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('brown')}>brown</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('blue')}>blue</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('gray')}>gray</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('white')}>white</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('red')}>red</button>
        </li>
      </ul>
      <ul type="none" className={editfilter.colorsList2}>
        <li>
          <button type='button' onClick={() => toggleColor('yellow')}>Yellow</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('purple')}>purple</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('orange')}>orange</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('silver')}>silver</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('green')}>green</button>
        </li>
        <li>
          <button type='button' onClick={() => toggleColor('gold')}>gold</button>
        </li>
        <li>
          <input type='text' placeholder='other color, type it' style={{
            'position': 'absolute', 'top': '55px', 'left': '37px', 'border': '2px solid #497ecd',
            'box-sizing': 'border-box', 'border-radius': '10px', 'width': '180px', 'height': '50px',
            'margin': '2px 10px'
          }} />
        </li>
      </ul>
    </div>
    <button type="reset" className={editfilter.cancel}>
      Cancel
    </button>
    <button type="submit" className={editfilter.show}>
      show results
    </button>
  </form>
);

        }
export default Filter;

