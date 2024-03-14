import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import styles4 from "./PostCarOrPart.module.css";


class PostCarOrPart extends Component{

   constructor(props){
      super(props)
      this.state = {
        doorNum : '2',
        carColor : 'brown',
        gear : 'Automatic',
        bodyType : 'SUV'
      }
    }

    toggleDoor=(value)=>{
      this.setState({
        doorNum:value
    })
    }

    toggleColor=(value)=>{
    this.setState({
      carColor:value
    })
    }

    toggleGear=(value)=>{
      this.setState({
           gear:value
    })
  }

  toggleBodyType=(value)=>{
    this.setState({
      bodyType:value
  })
}
   render(){
    return(
        <div className={styles4.container}>
           
          <NavBar/>
          <div className={styles4.page}>
               <header>
                  <p>My Profile</p>
                  <hr/>
               </header>
               <p>Post A Car Or Part</p>
               <i class="fa-solid fa-chevron-right" style={{
                position: "absolute",
                width: "30px",
                height: "30px",
                left: "180px",
                top: "108px",
                color: "rgba(0, 0, 0, 0.75)",
               }}></i>
            
               <img src='\img\logo.jpg'   alt='LOGO' className={styles4.myImg}/>
               <form className={styles4.form} >

                  <div className={styles4.carPH}>
                     <label>Car / Part Photo :</label>
                     <input type="image" alt="" />
                     <i class="fa-solid fa-camera" style={{
                         'position':'absolute',
                         'top': '70px' ,
                         'left': '340px',
                         'color':'blue',
                         'cursor':'pointer'

                     }}></i>
                  </div>

                  <div className={styles4.makeORmodel}>
                     <label>Make / Model :</label>
                     <input type="text" placeholder="Add Make And Model"/>
                  </div>

                  <div className={styles4.yearRange}>
                     <label>Year :</label>
                     <input type="text" placeholder="From" />
                     <input type="text" placeholder="To"/>
                  </div>

                  <div className={styles4.bodyTY}>
                     <label>Body Type :</label>
                         <ul type='none'>
                                 <li className={styles4.l1}>
                                    <button type ='button' onClick={()=>this.toggleBodyType('COUPE')} className={styles4.b1}><img src='\img\coupe.svg' alt='COUPE' /> COUPE</button>
                                 </li>
                                 <li className={styles4.l2}>
                                    <button type ='button' onClick={()=>this.toggleBodyType('SEDAN')} className={styles4.b2}><img src='\img\sedan.svg' alt='SEDAN' /> SEDAN</button>
                                 </li>
                                 <li className={styles4.l3}>
                                    <button type ='button' onClick={()=>this.toggleBodyType('HATCH')} className={styles4.b3}><img src='\img\hatch.svg' alt='HATCH' /> HATCH</button>
                                 </li>
                                 <li className={styles4.l4}>
                                    <button type ='button' onClick={()=>this.toggleBodyType('SUV')} className={styles4.b4}> <img src='\img\suv.svg' alt='SUV' /> SUV</button>
                                 </li>
                                 <li className={styles4.l5}>
                                    <button type ='button' onClick={()=>this.toggleBodyType('WAGON')} className={styles4.b5}>  <img src='\img\wagon.svg' alt='WAGON' /> WAGON</button>
                                 </li>
                                 <li className={styles4.l6}>
                                    <button type ='button' onClick={()=>this.toggleBodyType('PICKUP')} className={styles4.b6}><img src='\img\pickup.svg' alt='PICKUP' /> PICKUP</button>
                                 </li>
                         </ul>
                     
                  </div>

                  <div className={styles4.thePrice}>
                     <label>Price :</label>
                     <input type="text" placeholder="Min" />
                     <input type="text" placeholder="Max" />
                  </div>

                  <div className={styles4.gear}>
                     <label>Gear Box :</label>
                        <ul type='none'>
                           <li>
                              <button type ='button' onClick={()=>this.toggleGear('Automatic')}>Automatic</button>
                           </li>
                           <li>
                              <button type ='button' onClick={()=>this.toggleGear('Manual')} >Manual</button>
                           </li>
                        </ul>
                  </div>

                  <div className={styles4.numOfDoors}>
                     <label>Doors :</label>
                         <ul type='none'>
                              <li>
                                 <button type ='button' onClick={()=>this.toggleDoor('2')}>2</button>
                              </li>
                              <li>
                                 <button type ='button' onClick={()=>this.toggleDoor('3')}>3</button>
                              </li>
                              <li>
                                 <button type ='button' onClick={()=>this.toggleDoor('4')}>4</button>
                              </li>
                              <li>
                                 <button type ='button' onClick={()=>this.toggleDoor('5')}>5</button>
                              </li>

                         </ul>
                  </div>

                  <div className={styles4.favColor}>
                  <label>Colors :</label>
                           <ul type='none'>
                                 <li>
                                      <button type ='button' onClick={()=>this.toggleColor('beige')}>beige</button>
                                 </li>
                                 <li>
                                      <button type ='button' onClick={()=>this.toggleColor('black')}>black</button>
                                 </li>
                                 <li>
                                      <button type ='button' onClick={()=>this.toggleColor('brown')}>brown</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('blue')}>blue</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('gray')}>gray</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('white')}>white</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('red')}>red</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('yellow')}>Yellow</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('purple')}>purple</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('orange')}>orange</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('silver')}>silver</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('green')}>green</button>
                                 </li>
                                 <li>
                                       <button type ='button' onClick={()=>this.toggleColor('gold')}>gold</button>
                                 </li>
                           </ul>
                  </div>

                  <button type='submit'>Post</button>

               </form>
          </div>
     </div>
    );
                  }
}
    
export default PostCarOrPart;