import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import CarShop from './components/Components/CarShop/CarShop';
import CarParts from './components/Components/CarParts/CarParts';
import LogIn from './components/Components/LogIn/LogIn'
import SignUp from './components/Components/SignUp/SignUp';
import Filter from './components/Components/Filter/Filter';
import Agency from './components/Components/Agency/Agency';
import Store from './components/Components/Store/Store'
import CarInfo from './components/Components/CarInfo/CarInfo';
import PartInfo from './components/Components/PartInfo/PartInfo';
import  Profile  from './components/Components/Profile/Profile';
//import MainInterface from './components/Components/MainInterface/MainInterface';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/store' element={<Store/>}/>
  <Route path='/agency' element={<Agency/>}/>
     <Route path='/filter' element={<Filter/>}/>
     <Route path='/' element={<App />}/>
     <Route path='/cars' element={<CarShop/>}/>
     <Route path='/parts' element={<CarParts/>}/>
     <Route path='/login' element={<LogIn/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/carinfo/:id' element={<CarInfo/>}/>
     <Route path='/partinfo/:id' element={<PartInfo/>}/>
     <Route path='/profile' element={<Profile/>}/>
  </Routes>
     
  </BrowserRouter>    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
